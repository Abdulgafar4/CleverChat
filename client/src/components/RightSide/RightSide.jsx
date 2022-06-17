import React, { useState } from 'react'
import './RightSide.css'
// import Noti from '../../img/noti.png'
// import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'
import {RiHome3Fill} from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { MdOutlineNotificationsActive } from 'react-icons/md'

const RightSide = () => {

  const [modalOpened, setModalOpened] = useState(false)

  return (
   <div className="RightSide">

       {/* Side Navbar */}
       <div className="navIcons">
           <Link to='../home'>
             <RiHome3Fill size={30} style={{color:"#c06c84"}}/>
           </Link>           
           <Link to='../home'>
            <MdOutlineNotificationsActive size={30} style={{color:"#000"}}/>  
           </Link>        
           <Link to='../home'> 
            <AiOutlineMessage size={30} style={{color:"#000"}}/>  
           </Link>     
           <Link to='../home'> 
            <UilSetting size={30} style={{color:"#000"}}/> 
           </Link>
       </div>


       {/* TrendCard */}
      <TrendCard/>

      {/* Share buttong */}
      <button className="button r-button" onClick={()=>setModalOpened(true)}>
        Post
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
   </div>
  )
}

export default RightSide