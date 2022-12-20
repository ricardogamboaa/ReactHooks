import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
    const { 
        formState, 
        onInputChange, 
        onResetForm, 
        username, 
        email, 
        password } = useForm( { username: '', email: '', password: '' } );

    return (
        <>
        <h1>Form With Custom Hook</h1>
        <hr />
        
        <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username" 
            value={ username }
            onChange={ onInputChange } />
       
        <input 
            type="text" 
            className="form-control mt-2" 
            placeholder="ricardo@gmail.com" 
            name="email" 
            value={ email }
            onChange={ onInputChange } />
            
        <input 
            type="password" 
            className="form-control mt-2" 
            placeholder="password" 
            name="password" 
            value={ password }
            onChange={ onInputChange } />

        <button className='btn btn-primary mt-4' onClick={ onResetForm }>Reset</button>
        </>
    )
}
    