import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Navigate } from "react-router-dom";

const LOGIN_URL = "/auth";

export default function Login() {
    const [userGmail, setUserGamil] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [userGmail, password])

    async function handleSubmit(e) {
        e.preventDefault();
        setUser({
            userGmail,
            password
        });
        localStorage.setItem('user', "{...user}");

        // const response = await axios.post(LOGIN_URL,
        //         JSON.stringify(user),
        //         {
        //             headers: {"Content-Type": "application/json"},
        //             withCredentials: true
        //         }
        //     )
        // if (response.status === 400) {
        //     setErrMsg('Missing Username or Password');
        // } else if (response.status === 200) {
        //     console.log(response.data);
           
        //     <Navigate to="/" />
        // }
        <Navigate to="/" />
    }

    return (
        <div className="form">
            <h1>Sign In</h1>
            <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user-gmail">Gmail</label>
                <input 
                    type="gmail" 
                    value={userGmail} 
                    placeholder="Enter your email"
                    onChange={e => setUserGamil(e.target.value)}
                />

                <label htmlFor="user-password">Password</label>
                <input 
                    type="password" 
                    value={password} 
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}