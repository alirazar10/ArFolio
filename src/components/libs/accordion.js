'use client';

import { useState } from 'react';
import Head from 'next/head';
import { MdAdd, MdOutlineOpenInNew, MdRemove } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeHeight, setActiveHeight] = useState(null);

  const toggleItem = (index) => {
    //   console.log(index)
    if (index === activeIndex) {
      setActiveIndex(null);
      setActiveHeight(0)
    } else {
      let height = document.getElementById(index).firstChild.clientHeight
      setActiveIndex(index);
      setActiveHeight(`h-[${height}px]`)
    }
  };

  return (
    <div className=" rounded-md w-full">
      { items.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className={`w-full text-left px-4 py-2 font-medium focus:outline-none group bg-primary-800 ${activeIndex === index? 'bg-opacity-40' : 'bg-opacity-100'} rounded-xl hover:shadow-primary cursor-pointer`}
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center justify-between py-2 gap-2">
                <p className='flex flex-col items-start justify-between gap-1.5 w-full text-sm lg:text-[1.05rem] font-semibold text-primary-100'>
                    <span className={``} >
                        {item.title} 
                    </span>
                    <span className={`text-xs lg:text-sm font-medium `}>
                        {item.start_date} - {item.end_date}
                    </span>
                </p>
                <span className='py-2'> 
                    {index !== activeIndex ? 
                    <MdAdd className='text-2xl text-primary-50 font-bold  transition ease-in-out duration-300'/> : <MdRemove className='text-2xl text-primary-50 font-bold' /> } 
                </span>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[height] ease-in-out duration-500 ${
              activeIndex === index ? activeHeight : 'h-0'
            }`}
            id={index}
          >
            <div className="px-4 py-4 mt-2 bg-secondary-500 text-primary-100 text-sm lg:text-base  text-justify rounded-xl h-fit">
                <p className='text-sm text-secondary-300 pb-3 flex items-center gap-2'> 
                    <IoLocation size={20} className='text-primary-50'/> <span>{item.location}</span> 
                </p>
                <p className='text-sm text-secondary-300 pb-4 flex items-center gap-2'>
                    { item.link && <><MdOutlineOpenInNew size={20} className='text-primary-50'/> <a href={item.link}>{item.link}</a></> }
                </p>
                <p className='text-sm text-primary-100'> { item.description } </p>
                <div className='flex gap-2 flex-wrap mt-2.5'>
                    {
                        item.skills.map((skill)=>(
                            <span key={skill} className='px-2.5 py-2 bg-primary-100 text-secondary-300 text-xs rounded-xl bg-opacity-20'>{skill}</span>
                        ))
                    }
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


