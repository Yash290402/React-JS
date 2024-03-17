import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login(props) {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const { setuser } = useContext(UserContext)
    
    const handlesubmit = (e) => {
        e.preventDefault()
        setuser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                onChange={(e) => setusername(e.target.value)}
                value={username} placeholder='username' />
            <input type="text"
                onChange={(e) => setpassword(e.target.value)}
                value={password} placeholder='password' />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    );
}

export default Login;