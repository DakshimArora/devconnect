import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login(){
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    async function handleSubmit(event){
        event.preventDefault()
        const response=await fetch("http://localhost:3000/auth/login",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }
    )
        const data=await response.json()
        if(response.ok){
            localStorage.setItem("token",data.token)
            navigate("/developers")
        }
        console.log(data) 
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='loginForm'>Login</div>
            <div className='formGroup'>
                    <label htmlFor="login_email">Email</label>
                    <input 
                        id="login_email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={ formData.email }
                        onChange={(event)=>{
                            setFormData({
                                ...formData,
                                email:event.target.value
                            })
                        }}
                    />
            </div>
            <div className='formGroup'>
                <label htmlFor="login_password">Password</label>
                <input 
                        id="login_password"    
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(event)=>{
                            setFormData({
                                ...formData,
                                password:event.target.value
                            })
                        }}
                />
            </div>
            <button className='loginBtn'>Login</button>
        </form>
    )
}
export default Login