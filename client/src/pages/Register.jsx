import { useState } from "react";
function Register(){
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    async function handleSubmit(event){
        event.preventDefault();
        const response=await fetch(
            "http://localhost:3000/auth/register",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formData)
            }
        )
        const data=await response.json();
        console.log(data);
    }
    return(
            <form onSubmit={handleSubmit}>
                <h1 className="registerHeading">Create your account</h1>
                <div className="formGroup">
                    <label htmlFor="name"> Name </label>
                    <input 
                        id="name"
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        value={formData.name} 
                        onChange={(event)=>{
                            setFormData({
                                ...formData,
                                name:event.target.value
                            })
                        }}/>
                </div>
                
                <div className="formGroup">
                    <label htmlFor="email"> Email </label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(event)=>{
                            setFormData({
                                ...formData,
                                email:event.target.value
                            })
                        }}/>
                </div>

                <div className="formGroup">
                    <label htmlFor="password"> Password </label>
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(event)=>{
                            setFormData({
                                ...formData,
                                password:event.target.value
                            })
                        }}/>
                </div>
                
                <button className="createAcntBtn">Create account</button>
            </form>
    );
}
export default Register;