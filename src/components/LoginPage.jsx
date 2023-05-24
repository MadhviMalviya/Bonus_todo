import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import style from './Form.module.css'

function LoginPage() {
  const navigate = useNavigate()
  const [input, setInput] = useState({ email: '', password: '', })

  function handleLogin(e) {
    e.preventDefault()
    const loggedUser = JSON.parse(localStorage.getItem('user'))

    if (input.email === loggedUser.email && input.password === loggedUser.password) {
      localStorage.setItem('loggedIn', true)

      alert('logged in successfully')
      navigate('/')

    } else {
      alert('invalid password or email')
    }

  }

  return (
    <form  className={style.form}  onSubmit={handleLogin}>






      <pre />


      <div>

        <input type='text' name='email' placeholder='email...' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><pre />

        <input type={'password'} name='password' placeholder='password...' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />
      </div><br />

      <button>  Login</button>

      <br />

      <h6>Don't have an account ?
        <Link to={'/signin'}>
          <u> Sign up here</u>
        </Link></h6>


    </form>
  )
}

export default LoginPage
