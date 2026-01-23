import { useState } from 'react'
import './LogIn.css'

export const LogIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-container">
            <h1 className="login-title">Log In</h1>

            <input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}
