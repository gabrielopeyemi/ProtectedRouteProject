import React from 'react';
import auth from "../Auth/Auth"

export default function Dashboard(props) {
    return (
        <div>
            <h1>Dashboard</h1>


            {/* Logout button */}
            <input 
                type="Submit"
                value="Logout"
                onClick={()=>{
                    auth.logout(()=>{
                        props.history.push('/')
                    })
                }}

            />
        </div>
    )
}
