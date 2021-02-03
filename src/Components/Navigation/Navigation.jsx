import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.css'

export default function Navigation() {
  return (
    <>
      <div className='all-pics'>
        <Link to='/plus/students' exact>
          <img src='https://i.ibb.co/52C50qB/UA.jpg' />
        </Link>
        <Link to='/plus/heroes' exact >
          <img className='heroes' src='https://i.ibb.co/W0rR8D6/proheroes.png' />
        </Link>
        <Link to='plus/villains' exact >
          <img src="https://i.ibb.co/r753zJm/villains.jpg" />
        </Link>
      </div>
    </>
  )
}
