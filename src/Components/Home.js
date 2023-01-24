import React from 'react'
import Lefthome from './Lefthome'
import goldcoin from '../Images/goldcoin.jpg'
import {BsArrowUpRightSquareFill  } from "react-icons/bs";
import Button from './Buttons'
import HomeRight2nd from './HomeRight2nd';


function Home() {
  return (
    <div className='home'>
    <div className='lefthome'>
        <Lefthome/>
    </div>
   
    <div className='rightHome'>
       <p className='average'>Average active users/Client</p>
       <div className='right1stdiv'>
        <div className='frstdivContainer'>
            <img className='boy' src={ goldcoin} alt=''/>
            <div className='column'>
                <p className='same'> From</p>
                <p> 18,July,22</p>
            </div>
            <div className='column'>
                <p className='same'>To</p>
                <p>18,July,22</p>
            </div>
            <div className='column'>
                <p className='sameorange'>100</p>
                <p>+0.8%</p>
            </div>
            <div className='column'>
                <p className='sameorange'>4,50,000</p>
                <p>+0.8%</p>
            </div>
          <BsArrowUpRightSquareFill className='icn'/>
        </div>
        <Button/>
       </div>

       <div className='scndDiv'>
       <HomeRight2nd/>

       </div>

    </div>
    
      
    </div>
  )
}

export default Home
