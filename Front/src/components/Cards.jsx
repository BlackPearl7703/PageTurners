import React from 'react'

export default function Cards({item}) {
    console.log("inside item ",item)
  return (
    <div className='mt-6 my-10 px-3 '>
      <div className="card bg-base-100 w-80 hover:scale-105 shadow-xl shadow-slate-600 duration-200 ">
  <figure>
    <img
    className='h-[200px] w-full '
      src={item.image}
      alt="Shoes" /> 
      
  </figure>
  <div className="card-body text-slate-400">
    <h2 className="card-title">
   {item.name}
      <div className="badge badge-secondary">{item.category} </div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline"> Rs. { item.price} </div>
      <div className="text-black dark:text-pink-500 dark:hover:text-white cursor-pointer px-2 py-1 rounded-full border-[2px]  bg-white hover:bg-pink-400  hover:text-white duration-200">
     Buy Now
        </div>
    </div>
  </div>
</div>
    </div>
  )
}
