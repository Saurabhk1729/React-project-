import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  console.log(props.company)
  return (
    
      <div className="card">
        <div>
          <div className="top">
          <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.one}</h4>
            <h4>{props.two}</h4>
          </div>
        </div>
        </div>

        <div className="bottom">
          <div>
      
              <h3>{props.payment}</h3>
              <p>{props.loc}</p>
              </div>
            <div>
              <button>Apply Now</button>
            </div>
            
          
        </div>
      </div>
   
  )
}

export default Card
