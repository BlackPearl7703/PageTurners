const User =require('../model/user.model')
const bcrypt =require('bcryptjs')
 const signup=async(req,res)=>{
    try{
          console.log(req.body)
          const {username,email,password}=req.body;
          const user=await User.findOne({email});

              if(user)
            {
                return res.status(400).json({message:"user aleady exist krta h !!"})
            }
            const hashpassword=await bcrypt.hash(password,12);
            console.log("yaha tak ho gya!")
            console.log(req.body);
            const newUser =new User({
                username: username,
                email:email,
                password:hashpassword

            })

            await newUser.save();
            res.status(201).json({message:"user created successfully!"})
    }
    catch(e)
    {
         res.status(500).json({message:"nhi kr paaya create"})
    }

}

const login=async(req,res)=>{
    try{
        console.log(req.body)
        const {email,password}=req.body;
        const hashpassword=await bcrypt.hash(password,12);
        const user=await User.findOne({email});
        console.log("user print",user)
        const isMatch=await bcrypt.compare(password,user.password);
        if(!user || !isMatch)
            {
               return  res.status(404).send("invalid email or password!!")
            }
            res.status(201).json({message:"user login successfully!"
              
            })
            // res.render('/')


    }
    catch(e)
    {
        res.status(500).json({message:"nhi kr paaya login"})
    }
}

module.exports ={signup,login}