import React from 'react'
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <div>
        <div className='card mt-5 ms-5' style={{backgroundColor: 'black'}}>
            <div className='card-img'>
                <Link to={props.name} style={{textDecoration: 'none'}}>
                <img src={props.img} />
                <h3 className='mt-3 text-dark'>{props.name}</h3>
                </Link>
            </div>
        </div>
    </div>
  )
}
