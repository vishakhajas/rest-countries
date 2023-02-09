import React,{useContext} from 'react'
import './Header.css'
import {FaRegMoon} from 'react-icons/fa'
import {HiSun} from 'react-icons/hi2'
import { myContext } from '../../App'

const Header = () => {
  const {dark, darkFn} = useContext(myContext);

  
  return (
    <header className={`${dark ? "dark" : ''} header`}>
        <div>
            <h1 className={`${dark ? "dark" : ''} heading`}>Where in the world</h1>
        </div>
        <div>
            <button className={`${dark ? "dark" : ''} btn`} onClick={darkFn}>
               {dark? <HiSun/> : <FaRegMoon/>} {dark ? "Light" : "Dark"} Mode
            </button>
        </div>
    </header>
  )
}

export default Header