import React, { useState } from "react";
import './login.css';

export function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [title, setTitle] = useState("Mr");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleLoginSubmit = async (event: any) => {
        event.preventDefault();

        try {
            // Make an HTTP POST request to the /login endpoint
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword
                })
            });

            // Check if the request was successful
            if (response.ok) {
                // Redirect the user to another page or perform any other action
                console.log('Logged in successfully');
            } else {
                // Handle the error response
                const errorData = await response.json();
                setError(errorData.error || 'Failed to log in.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to log in.');
        }
    };

    const handleSignupSubmit = async (event: any) => {
        event.preventDefault();

        try {
            // Make an HTTP POST request to the /signup endpoint
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: signupEmail,
                    password: signupPassword,
                    title,
                    name
                })
            });

            // Check if the request was successful
            if (response.ok) {
                // Redirect the user to another page or perform any other action
                console.log('Signed up successfully');
            } else {
                // Handle the error response
                const errorData = await response.json();
                setError(errorData.error || 'Failed to sign up.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Failed to sign up.');
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
                <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit} className="auth-form">
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
                        value={isLogin ? loginEmail : signupEmail}
                        onChange={isLogin ? (e) => setLoginEmail(e.target.value) : (e) => setSignupEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={isLogin ? loginPassword : signupPassword}
                        onChange={isLogin ? (e) => setLoginPassword(e.target.value) : (e) => setSignupPassword(e.target.value)}
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
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}
