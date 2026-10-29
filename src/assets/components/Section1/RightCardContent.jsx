import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute h-full w-full top-0 left-0  flex flex-col justify-between">
        <h2 className="bg-white px-4 py-4 text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id}</h2>
      
      <div>
        <p className="text-lg text-white leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, suscipit dolorum. Enim minima ipsam voluptatum? 
        </p>
        <button className="bg-blue-950 text-white rounded-full px-4 py-3 font-medium ">{props.tag}</button>
       <button className="bg-blue-950 text-white rounded-full px-3 py-3 font-medium" > <i className="ri-arrow-right-line"></i></button>
      </div>
    </div>
    </div>
  )
}

export default RightCardContent
