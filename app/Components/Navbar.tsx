'use client'
import React from 'react'
import { AnimaText } from './index'
const Navbar = () => {
  function click(){
    const sideBar:any = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
  }
  return (
    <div className='Navbar bg-transparent'>
      <nav>
        <ul className='sideBar'>
            <li onClick={(e)=>{
              e.preventDefault()
              const sideBar:any = document.querySelector('.sideBar')
              sideBar.style.display = 'none'
            }}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a onClick={click} href="#home">Home</a></li>
            <li><a onClick={click} href="#about">About </a></li>
            <li><a onClick={click} href="#portfolio">Portfolio</a></li>
            <li><a onClick={click} href="#contact">Contact</a></li>
        </ul>
        <ul>
            <li><a href="" className='anima-txt'><AnimaText/></a></li>
            <li className='hideOnMobile underline-from-center'><a href="#home">Home</a></li>
            <li className='hideOnMobile underline-from-center'><a href="#about">About </a></li>
            <li className='hideOnMobile underline-from-center'><a href="#portfolio">Portfolio</a></li>
            <li className='hideOnMobile underline-from-center'><a href="#contact">Contact</a></li>
            <li className='menu-btn' onClick={(e)=>{
              e.preventDefault()
              const sideBar:any = document.querySelector('.sideBar')
              sideBar.style.display = 'flex'
            }}>
              <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
