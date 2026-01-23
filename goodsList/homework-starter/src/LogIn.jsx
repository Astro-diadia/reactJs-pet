import { useState } from 'react'
import './LogIn.css'

export const LogIn = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <h1 className="login__title">Log In</h1>

            <input className="login__input"
                aria-label="Name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input className="login__input"
                aria-label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input className="login__input"
                aria-label="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login__button" type="submit">Log In</button>
        </div>
    )
}
