import {React,useState,useEffect} from "react";
// import list from "../../public/list.json";
import Slider from "react-slick";
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

export default function Freebok() {
  const [book,setbook]=useState([]);
    // console.log(list)

    useEffect(()=>{
      const getBook=async()=>{
        try{
          const res=await axios('http://localhost:4000/book/');
          console.log(res.data);
          setbook(res.data)
        }
        catch(error)
        {
         res.send("error hai",error)
        }
      }
      getBook()
    },[])
  const filterdata = book.filter((data) => data.category === "free");
//   console.log("prince",filterdata)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-8">

        <div>
           <h1 className="font-semibold text-xl pb-2">Free Courses</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          dolorum dolore quos exercitationem rem sint suscipit ut, accusantium
          officia alias!
        </p> 
        </div>
        
      

      <div className='bg-slate-300 text-black dark:bg-slate-900 dark:text-white'>
      <Slider {...settings}>
        
     {filterdata.map((item)=>{
        return <Cards item ={item} key={item.id} />
     })}
      </Slider>
      </div>
      </div>
    </>
  );
}
