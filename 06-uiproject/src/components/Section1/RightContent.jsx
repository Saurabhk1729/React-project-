import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-190  py-3 px-4 flex gap-3 overflow-x-auto flex-nowrap'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
      
    </div>
  )
}

export default RightContent
