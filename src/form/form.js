import React, { useState } from 'react';
import logo from '../kklogo.svg';
import './form.css';

function Form() {
    const [isSignUp, setIsSignUp] = useState(false);
    return(
        <div className="container">
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                Khatryak Khutruk Electronics
            </h1>
        </div>
         <div className="form">
         {isSignUp ? (
                    // Sign Up Form
                    <>
                        <h2>Sign Up</h2>
                        <form>
                            <div>
                                {/* <label htmlFor="name">Name</label> */}
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>
                            <div>
                                {/* <label htmlFor="email">Email</label> */}
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div>
                                {/* <label htmlFor="password">Password</label> */}
                                <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                            <div>
                                {/* <label htmlFor="confirm-password">Confirm Password</label> */}
                                <input type="password" id="confirm-password" placeholder="Confirm your password" required/>
                            </div>
                            <button className="Button-signup" type="submit">Sign Up</button>
                            <button className="Button-cancel" type="button"onClick={() => setIsSignUp(false)}>Cancel</button>
                        </form>
                    </>
                ) : (
                    // Sign In Form
                    <>
                        <h2>Sign In</h2>
                        <form>
                            <div>
                                {/* <label htmlFor="email">Email</label> */}
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div>
                                {/* <label htmlFor="password">Password</label> */}
                                <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                            <button className="Button-Signin" type="submit">Sign In</button>
                        </form>
                        <div>
                            <a href="#" onClick={() => setIsSignUp(true)}>
                            Don't have an account? Sign Up
                        </a>
                        </div>
                    </>
                )}
            </div>
            </div>
    );
}
export default Form;