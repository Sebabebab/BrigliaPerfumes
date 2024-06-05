import React, { useState } from "react";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: any) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Log In</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    );
}

