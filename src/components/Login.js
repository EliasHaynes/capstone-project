import React from "react"

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }
    return (
        <div>
            <h1>Login Page</h1>
            <h3>Welcome! Lets get you started with an account</h3>
            <form>
                <input placeholder="email"></input>
                <input placeholder="password"></input>
                <button onClick={handleSubmit}>Login</button>
            </form>
            <a>Forgot Password?</a>
        </div>
    )
}

export default Login;