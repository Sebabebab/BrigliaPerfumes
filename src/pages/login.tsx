import React, { useState } from "react";
import './login.css';

export function Login() {
    // State variables to manage form inputs and state
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [loginEmail, setLoginEmail] = useState(""); // Login email
    const [loginPassword, setLoginPassword] = useState(""); // Login password
    const [signupEmail, setSignupEmail] = useState(""); // Signup email
    const [signupPassword, setSignupPassword] = useState(""); // Signup password
    const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password for signup
    const [title, setTitle] = useState("Mr"); // Title for signup (Mr/Mrs)
    const [name, setName] = useState(""); // Name for signup
    const [error, setError] = useState(""); // Error message for displaying errors

    // Handle login form submission
    const handleLoginSubmit = async (event: any) => {
        event.preventDefault(); // Prevent default form submission

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

    // Handle signup form submission
    const handleSignupSubmit = async (event: any) => {
        event.preventDefault(); // Prevent default form submission

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

    // Handle closing the modal or redirecting
    const handleClose = () => {
        window.location.hash = "/";
    };

    return (
        <div className="auth-form-container">
            <div className="auth-form-wrapper">
                <button className="close-button" onClick={handleClose}>X</button>
                <div className="auth-form-toggle">
                    {/* Button to toggle between login and signup */}
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
                {/* Form for login or signup */}
                <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit} className="auth-form">
                    {/* Display form title based on login/signup mode */}
                    <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
                    {/* Additional inputs for signup */}
                    {!isLogin && (
                        <>
                            {/* Dropdown for selecting title (Mr/Mrs) */}
                            <select 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="auth-form-select"
                            >
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                            {/* Input for entering name */}
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </>
                    )}
                    {/* Input for email */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={isLogin ? loginEmail : signupEmail}
                        onChange={isLogin ? (e) => setLoginEmail(e.target.value) : (e) => setSignupEmail(e.target.value)}
                        required
                    />
                    {/* Input for password */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={isLogin ? loginPassword : signupPassword}
                        onChange={isLogin ? (e) => setLoginPassword(e.target.value) : (e) => setSignupPassword(e.target.value)}
                        required
                    />
                    {/* Additional input for confirming password in signup */}
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    )}
                    {/* Button to submit form */}
                    <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
                    {/* Display error message if any */}
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}
