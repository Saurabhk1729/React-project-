import React from 'react'
import Section1 from './components/Section1/Section1'
import Page1Content from './components/Section1/Page1Content'

const App = () => {

  const users=[
    {img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      tag:"Satisfied",
      num:"1"
    }
    ,
    {img:"https://images.unsplash.com/photo-1761839257349-037aea1d94de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
      tag:"UnBroken",
      num:"2"
    },
    {img:"https://images.unsplash.com/photo-1768898794970-d15dbae12334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
      tag:"kamal",
      num:"3"
    }
  ];

  return (
    <div>
      <Section1 users={users}/>
      
    </div>
  )
}

export default App
