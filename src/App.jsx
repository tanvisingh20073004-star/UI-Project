import React from 'react'
import Section1 from './assets/components/Section1/Section1'
import Section2 from "./assets/components/Section2/Section2"
const App = () => {
  const users=[
    {img:"https://th.bing.com/th/id/OIP.129kbKsv9cOYe0mOj-8U5wHaNK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      intro:"",
      tag:"Satisfied"
    },
    {img:"https://i.pinimg.com/736x/17/73/20/17732064638ecf1d5f2cedde13c762e5.jpg",
      intro:"",
      tag:"Fantabulous"
    },
    {img:"https://tse4.mm.bing.net/th/id/OIP.mM-wP4DxGRrZNjwr7nWz8gHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      intro:"",
      tag:"Marvellous"
    },{
      img:"https://plus.unsplash.com/premium_photo-1787152513596-bf8edcf190d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:"",
      tag:"Fabergasting"
    }
  ]
  return (
    <div>
      < Section1 users={users}/>
      < Section2/>

    </div>
  )
}

export default App
