import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div className="h-full flex flex-nowrap gap-10 rounded-4xl  p-4  overflow-x-auto relative w-2/3 ">
      {props.users.map(function(elem,idx){
        return<RightCard key={idx} id={idx+1} img={elem.img}  tag={elem.tag} />
      })}
      
    </div>
  )
}

export default RightContent
