import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import style from './Form.module.css'

function SignInPage() {
  const navigate=useNavigate()
  const[input,setInput]=useState({firstname:'',lastname:'',email:'',phone:'',password:''})
  const [errors,setErrors]=useState({})
  const[isRegistered,setRegistered]=useState(false)


  function formValidation({ firstname, lastname, email, phone, password }) {
    let errors = {};
  
    if (!firstname) {
      errors.firstname = "First name is required.";
    }
  
    if (!lastname) {
      errors.lastname = "Last name is required.";
    }
  
    if (!email) {
      errors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email format.";
    }
  
    if (!phone) {
      errors.phone = "Phone number is required.";
    } else if (!validatePhone(phone)) {
      errors.phone = "Invalid phone number format.";
    }
  
    if (!password) {
      errors.password = "Password is required.";
    } else if (!validatePassword(password)) {
      errors.password = "Invalid password format.";
    }
  
    return errors;
  }
  
  function validateEmail(email) {
    
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    return pattern.test(email);
  }
  
  function validatePhone(phone) {
  
    const pattern = /^[0-9]{10}$/;
    return pattern.test(phone);
  }
  
  function validatePassword(password) {
    
    return password.length >= 8;
  }
  
function handleSubmit(e){
  e.preventDefault()
  const errors=formValidation(input)
if(Object.keys(errors).length===0){
  const storedUser=localStorage.getItem('user')
  const existingUser=storedUser? JSON.parse(storedUser):null
  if(existingUser && existingUser.email===input.email){
    alert('already registered!')
  }else{
    localStorage.setItem('user',JSON.stringify(input))
    alert('Successfully registered')
    navigate('/login')
    setRegistered(true)
  }
}else{
  setErrors(errors)
}


}




  return (
    <div>
    <form  className={style.form}  onSubmit={handleSubmit} >
 <input type='text' name='email' placeholder='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.email && <p >{errors.email}</p>}<pre/>
                <input type='text' name='firstname' placeholder='first name' value={input.firstname} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.name && <p>{errors.firstname}</p>}<pre/>
                <input type='text' name='lastname' placeholder='last name' value={input.lastname} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.name && <p>{errors.lastname}</p>}<pre/>
                <input type='text' name='password' placeholder='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.password && <p  >{errors.password}</p>}<pre/>
                <input type='Number' name='phone'placeholder='phone no.' value={input.phone} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.phone && <p >{errors.phone}</p>}<pre/>
                <br/>
                <button>Sign up</button>
               
                <h6>Already have an account?
        <Link to={'/login'}>
          <u> Login here</u>
        </Link></h6>
        </form>
    </div>
    
  )
}

export default SignInPage
