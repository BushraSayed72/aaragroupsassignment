import React from 'react'
import goldcoin from '../Images/goldcoin.jpg'
import {BsGraphUp  } from "react-icons/bs";
import {MdFilterList} from "react-icons/md";
import {BsCircle } from "react-icons/bs";
import {MdContactPage } from "react-icons/md";
import aara from '../Images/aaraimg.webp';

function HomeRight2nd() {
  return (
  <div className='flexrightdiv'>
  <div className='leftcontainer'>
    <div className='right2nd'>
    <div className='card'>
        <div className='card1st'>
        <img className='boy' src={ goldcoin} alt=''/>
        <p className='grey'>Total Client</p>
        <BsGraphUp className='grey'/>
        </div>
        <div className='card2nd'>
            <p className='grey'>100.00</p>
            <p className='grey'> +18 clients</p>
        </div>
    </div>
    <div className='card'>
        <div className='card1st'>
        <img className='boy' src={ goldcoin} alt=''/>
        <p className='grey'> Total Active <br/>Clients</p>
        <BsGraphUp className='grey'/>
        </div>
        <div className='card2nd'>
            <p className='grey'>100.00</p>
            <p className='grey'> +08.00</p>
           
        </div>
    </div>
    <div className='card'>
        <div className='card1st'>
        <img className='boy' src={ goldcoin} alt=''/>
        <p className='grey'>Overall users</p>
        <BsGraphUp className='grey'/>

        </div>
        <div className='card2nd'>
            <p className='grey'>5,00,000</p>
            <p className='grey'> +40,000</p>
        </div>
    </div>

      
    </div>
    <div className='snddiv'>
    <div className='graphcard'>
    <div className='card2nd'>
    <div className='cardicon'>
    <p className='grey '> Concern Analysis</p>
    <MdFilterList className=' orange'/>
    </div>
            <p className='grey'>1000.00</p>
            <p className='grey'> +18 clients</p>
        </div>
        <div className='listCard'>
            <ul>
                <li className='orangelist'> <BsCircle className='circle'/> Overall Concerns</li>
               <div className='grey'> <li className='borderlist' > <BsCircle  className='circle'/> Open Concerns </li></div>
                <li className='greenlist'> <BsCircle  className='circle'/> Resolved Concerns</li>
            </ul>
           

            <div className='summaryChart' >
            <div className='orangechart'></div>
            <div className='white'></div>
            <div className='green'></div>

            
            </div>
            </div>


    </div>
    
    <div className='graphcard'>
    <div className='card2nd'>
    <div className='cardicon'>
    <MdContactPage className=' orange'/>
    <p className='grey'> Account Summary</p>
    </div>
           <div className='smallcards'>
            <div className='smallcard'>
            <div className='iconbrdr'><BsGraphUp className='orange grrey'/></div>
            
            <p className='this'>This week </p>
            <p className='same'> $ 549k</p>
            <p className='same'> +5k </p>
</div>
            
            <div className='smallcard'>
            <div className='iconbrdr'><BsGraphUp className='orange grrey'/></div>
            <p className='this'>This month</p>
            <p className='same'>$ 5459k</p>
            <p className='same'> -5k </p>

            </div>
           

        </div>

    </div>
    </div>
    
    </div>
    </div>
    <div className='rightcontainer'>
        <div className='topbrdr '>
            <p >Search</p>
        </div>
        <div className=' homerightlst'>
            <img className='boy' src={aara}></img>
            <div className='info'>
            <p>Aara Clouds</p>
                <p>info@aaraclouds.com</p>
            </div>
        </div>
        <div className='homerightlst'>
        <img className='boy' src={aara}></img>
        <div className='info'>
        <p>Aara Clouds</p>
                <p>info@aaraclouds.com</p>
        </div>
        </div>
        <div className='homerightlst'>
        <img className='boy' src={aara}></img>
            <div className='info'>
            <p>Aara Clouds</p>
                <p>info@aaraclouds.com</p>
            </div>
        </div>
        <div className='homerightlst'>
        <img className='boy' src={aara}></img>
            <div className='info'>
                <p>Aara Clouds</p>
                <p>info@aaraclouds.com</p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default HomeRight2nd
