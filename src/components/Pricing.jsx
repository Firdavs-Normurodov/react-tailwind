import React, { useState } from 'react';
import {motion} from "framer-motion"
import {fadeIn} from "../variant"
const Pricing = () => {
  const [isYearly,setIsYearthly]=useState(false)
  const packages=[
    {name:"Start", mothlyPrices:19,yearlyPrice:199, description:
    "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    green:"src/assets/Rectangle.png"
    },
    {name:"Advance", mothlyPrices:39,yearlyPrice:399, description:
    "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    green:"src/assets/Rectangle.png"
    },
    {name:"Premium", mothlyPrices:59,yearlyPrice:599, description:
    "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    green:"src/assets/Rectangle.png"
    }
  ]
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id='pricing'>
      <div className="text-center">
        <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>Here are all our plans</h2>
        <p className=' text-tartiary md:w-3/4 mx-auto px-4'>
          A simple paragraph is comprised of three major components. The <br />
          which is often a declarative sentence.
        </p>
        {/* toggle pricing */}
        <div className='mt-16'>
          <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
            <span className='mr-8 text-2xl font-semibold'>Mothly</span>
            <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
              <div className={`w-6 h-6 rounded-full transition duration-200 ${isYearly ? "bg-primary ml-8":" bg-gray-500"}`}></div>
            </div>
            <span className='ml-8 text-2xl font-semibold'>Yearly</span>
          </label>
          <input type="checkbox" id='toggle' className='hidden' checked={isYearly} onChange={()=>setIsYearthly(!isYearly)}/>
        </div>
      </div>
      <motion.div 
      variants={fadeIn("up",0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.5}}
      className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
        {
          packages.map((pkg,index)=> <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
            <h3 className=' text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
            <p className=' text-tartiary text-center my-5'>{pkg.description}</p>
            <p className='mt-5 text-center text-secondary text-4xl font-bold'>
              {
                isYearly? `$${pkg.yearlyPrice}`:`$${pkg.mothlyPrices}`
              }<span className='text-base text-tartiary font-medium'>/{isYearly ? 'year':'month'}</span>
            </p>
            <ul className='mt-4 space-y-2 px-4'>
              <li className='flex gap-3 items-center'><img src={pkg.green} className='w-4 h-4' alt="img#" /> Videos of Lessons</li>
              <li className='flex gap-3 items-center'><img src={pkg.green} className='w-4 h-4' alt="img#" /> Homework check</li>
              <li className='flex gap-3 items-center'><img src={pkg.green} className='w-4 h-4' alt="img#" /> Additional practical task</li>
              <li className='flex gap-3 items-center'><img src={pkg.green} className='w-4 h-4' alt="img#" /> Monthly conferences </li>
              <li className='flex gap-3 items-center'><img src={pkg.green} className='w-4 h-4' alt="img#" /> Personal advice from teachers</li>
              
            </ul>
            <div className='w-full mx-auto mt-8 flex items-center justify-center'>
              <button className='btnPrimary'>Get Started</button>
            </div>
          </div>)
        }
      </motion.div>
    </div>
  );
};

export default Pricing;