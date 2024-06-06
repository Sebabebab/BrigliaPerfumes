import React, { useState } from "react";
import './login.css';

export function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [title, setTitle] = useState("Mr");
    const [name, setName] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (isLogin) {
            console.log("Log In - Email:", email);
            console.log("Log In - Password:", password);
        } else {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                console.log("Sign Up - Title:", title);
                console.log("Sign Up - Name:", name);
                console.log("Sign Up - Email:", email);
                console.log("Sign Up - Password:", password);
            }
        }
    };

    const handleClose = () => {
        window.location.hash = "/";
    };

    return (
        <div className="auth-form-container">
            <div className="auth-form-wrapper">
                <button className="close-button" onClick={handleClose}>X</button>
                <div className="auth-form-toggle">
                    <button 
                        className={isLogin ? 'active' : ''} 
                        onClick={() => setIsLogin(true)}
                    >
                        Log In
                    </button>
                    <button 
                        className={!isLogin ? 'active' : ''} 
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="auth-form">
                    <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
                    {!isLogin && (
                        <>
                            <select 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="auth-form-select"
                            >
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </>
                    )}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    )}
                    <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
                </form>
            </div>
        </div>
    );
}
