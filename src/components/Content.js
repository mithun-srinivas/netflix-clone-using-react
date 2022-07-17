import React from 'react'
import '../App.css'
import Cards from './Cards'
import img1 from '../Images/ProfilePicture.png'
import img2 from '../Images/ProfilePicture (1).png'
import img3 from '../Images/ProfilePicture (2).png'
import img4 from '../Images/ProfilePicture (4).png'

export default function Content() {
  return (
    <div>
        <div className='content text-center text-white' style={{marginTop: '10%'}}>
            <div className='heading'>
                <h1>Who's Watching ?</h1>
            </div>
            <div className='cards' style={{display: 'flex', flexDirection: 'row', marginLeft: '15%'}}>
                <Cards img={img1} name="Mithun" />
                <Cards img={img2} name="Umut"/>
                <Cards img={img3} name="Murat"/>
                <Cards img={img4} name="Add Profile"/>
            </div>
        </div>
        
    </div>
  )
}
