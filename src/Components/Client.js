import React from 'react'
import Lefthome from './Lefthome.js'
import maskboy from '../Images/maskboy.jpeg'
import {AiOutlineUsergroupAdd  } from "react-icons/ai";

function Client() {
  return (
    <>
    <div className='client'>
    <div className='lefthome'>
    <Lefthome/>
    </div>
    <div className='clientContentR'>
    <div className='leftclient'>
    <div className='userinfo'>
        <p className='topcrd'>Add new Client</p>
        <img className='maskboy'  src={maskboy} alt=''/>

        <p>Only png,jpg,jpeg Image</p>
        <p>Please update your oragnization logo here</p>
    </div>
    <div className='buttons'>
    <button  ><AiOutlineUsergroupAdd/>View all</button>
    </div>
    

    </div>
    <div className='rightclient'>
    <p className='topcrd'>New Client Information</p>
    <form>
    <div className='column'> <label>Company Name</label>
    <input type='text' placeholder='Company name'/>

    <label>Administrator Email Id </label>
    <input type='text' placeholder='E.x admin@gmail.com'/>

    <label>Administrator Designantion </label>
    <input type='text' placeholder='E.x +912222222222'/>

    <label>Headquarter City</label>
    <input type='text' placeholder='Lucknow'/>

    <label>Industry</label>
    <input type='text' placeholder='Ex. Customer Support'/>

    

    
    </div>
    <div className='column'>
    <label>Administator Name</label>
    <input type='text' placeholder='Ex. Admin Name'/>

    <label>Alternate Mobile Number</label>
    <input type='text' placeholder='Ex. +91555555555'/>

    <label>Country</label>
    <input type='text' placeholder='India'/>

    <label>Employee Court</label>
    <input type='text' placeholder='Ex. 10.000 '/>


    </div>
       
        
    </form>
    <hr/>
    <p className='topcrd'>
            KYC Update
        </p>
    <div className='bottomright'>
        
   <div className='column'>
        <label>Incorporation Certificate</label>
    <input type='text' placeholder='png jpg jpeg supported '/>

    <label>Company Pan Card</label>
    <input type='text' placeholder='png jpg jpeg supported '/>
    </div>

    <div className='column'>
    <label>Company pan Card</label>
    <input type='text' placeholder='png jpg jpeg supported '/>

    <label>GSTIN</label>
    <input type='text' placeholder='Ex. 0000000 '/>
    </div>

    </div>
      

    </div>

    
    </div>
    
    </div>
   
    
</>
  )
}

export default Client
