
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Form.module.css'



function LoggedInUser() {
    const navigate=useNavigate()
    const loggedInUser=JSON.parse(localStorage.getItem('user'))

function handleLogout(){
    localStorage.removeItem('loggedIn')
    navigate('/login')
}

  return (
    <div>
      <h6>{loggedInUser.firstname}  {loggedInUser.lastname}</h6>
      <button className={style.logout} onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default LoggedInUser
