import React from 'react'
import {AiOutlineArrowLeft   } from "react-icons/ai";
import { BsBell  } from "react-icons/bs";
import {BiMessageError} from "react-icons/bi";
import maskboy from '../Images/maskboy.jpeg';




function Navbar() {
  return (<>
    <div className='navbar'>
    <div className='left-nav'>
        <div className='aara'> <p>Aara Tech</p></div>
        <div className='dashleft'> <div className='arrownav'><AiOutlineArrowLeft className='arrowOr'/></div><p>Dashboard</p></div>
    </div>
    <div className='right-nav'>
    <BsBell className='nav-icon'/>
    <BiMessageError className='nav-icon'/>
    <img className='boy' src={maskboy} alt=''/>
    <div className='navright-last'>
        <p className='dashright'>Dashboard</p>
        <p className='super'>Super Admin</p>
    </div>


    </div>
      
    </div>
    
    </>
  )
}

export default Navbar
