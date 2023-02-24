import "./login.scss"
import logo from "../logo-1.png"
import { useState } from "react"
import { auth } from "../firebase/firebase"
import { Link, Navigate, useNavigate } from "react-router-dom"
export const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            if (auth) {
                history("/")
                setPassword("")
                setEmail("")
            }

        }).catch(error =>alert(String(error).replace("FirebaseError: Firebase:","").replace("auth/","")))

    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            if (auth) {
                history("/")
                alert("you are registred")
                signIn(e)
            }
            
        }).catch(error => alert(String(error).replace("FirebaseError: Firebase:","").replace("auth/",""))
            );

    }

    return (
        <div className="login">
            <div className="login_form">
                <img src={logo} alt="" />

                <form action="" onSubmit={(e) => register(e)}>
                    <h1>Sign in</h1>
                    <label htmlFor="username">Email </label>
                    <input id="username" type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p>By signing, you agree to EC's Conditions of Use and Privacy Notice.</p>
                    <button onClick={(e) => signIn(e)}>Sign in</button>
                    <button type="submit">create EC account</button>
                </form>
            </div>
        </div>
    )
}