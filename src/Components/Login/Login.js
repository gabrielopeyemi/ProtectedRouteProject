import React from 'react';
import auth from "../Auth/Auth"

export default function Login(props) {
    return (
        <div>
            <h1>Login Page </h1>
            <input 
                type="submit" 
                placeholder="login" 
                value="submit" 
                onClick={ () => {
                    auth.login(() =>{
                        props.history.push("/dashboard");
                    })
                } }
            />
        </div>
    )
}
