import React from 'react';
import {useState} from 'react';

const RegisterForm = (props) => {
  
  const checkSubmittedForm = (e) => {
    e.preventDefault();
    console.log(email);
  }

    return(
        <div className = "RegForm">
        <h1 class="formname">Create Account</h1>
        <form onSubmit = {checkSubmittedForm}    action ="">
            <div class="reg-box">
               <label htmlFor = "">First Name</label>
                <input class = "text" value = {Firstname} type="text" ></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Last Name</label>
            <input class = "text" value = {LastName} type="text" ></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">User Name</label>
            <input class = "text" value = {Username} type="text" ></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Age</label>
            <input class = "text" value = {Age} type="text" ></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Email</label>
            <input class = "text" value = {email} type="text" ></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Contact</label>
            <input class = "text" value = {Contact} type="text" ></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Password</label>
            <input class = "text" value = {pass} type="text" ></input>
            </div>
            <br></br>
            <br></br>
            <button class = "bt" type="submit">Register</button>
<button class = "reg" onClick= {() => props.onFormSwitch('login')}>Already have an account? Login</button>

            </form>
        </div>

    );
}

export default RegisterForm;