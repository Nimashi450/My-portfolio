import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() =>setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() =>setActiveNav('#about')} className = {activeNav === '#about'? 'active' : ''}><AiOutlineUserAdd/></a>
      <a href='#experiance' onClick={() =>setActiveNav('#experiance')} className={activeNav === '#experiance'? 'active' : ''}><BsJournalBookmarkFill/></a>
      <a href='#contacts' onClick={() =>setActiveNav('#cotacts')} className={activeNav === '#contacts'? 'active' : ''}><MdPermContactCalendar/></a>
      
    </nav>
  )
}

export default Nav