import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 relative overflow-hidden rounded-4xl'>
      <img className='h-full w-full object-cover rounded-3xl' src={props.img} alt="" />

      <div className='absolute top-0 left-0 h-full w-ful  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2x; font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi exercitationem ad architecto vel autem!</p>
            <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font -medium px-7 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-blue-500 text-white rounded-full px-4 py-1'><i class="ri-arrow-right-fill"></i></button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default RightCard
