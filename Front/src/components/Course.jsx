import React from "react";
import list from '../../public/list.json'
import Cards from "./Cards";
import { Link } from "react-router-dom";
export default function Course() {
    console.log(list)
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-8">
        <div className="mt-20  items-center text-center justify-center">
          <h1 className="text-2xl pt-16 font-semibold md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here :)</span>{" "}
          </h1>
          <p className="mt-12">
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            culpa laborum dignissimos aliquid temporibus at quia numquam
            mollitia non, blanditiis distinctio doloremque ipsa molestiae, sit
            rerum accusamus suscipit maiores commodi?
          </p>

          <Link to='/'>

          <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 mt-6 duration-300">Back</button>
          </Link>


        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {/* {console.log("yaha hu main cards m")} */}

            {
                list.map((item)=>{
                   return <Cards key={item.id} item={item}/>
                   
                })
            }
        </div>
      </div>
    </>
  );
}
