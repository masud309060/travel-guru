import React, { useState } from 'react';
import HeaderD from '../Header/HeaderD';
import './Login.css'
import '../Booking/Booking.css'
import fbLogo from '../../images/Icon/fb.png'
import Glogo from '../../images/Icon/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './LoginManagement/firebase.config';
import { travelContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [newUser, setNewUser] = useState(true)
    const { userLogin, travelArea } = React.useContext(travelContext);
    const [loginUser, setLoginUser] = userLogin;
    const [place] = travelArea;
    console.log(loginUser)

    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.name === "email"){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password") {
            const rex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
            isFormValid = rex.test(e.target.value)
        }
        if(isFormValid) {
            const newUserInfo = {...loginUser}
            newUserInfo[e.target.name] = e.target.value;
            setLoginUser(newUserInfo)
        }

    }

    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        }).then( res => {
            console.log("username updated successfully")
        }).catch( err => {
        console.log(err)
        });
    }

    const handleSubmit = (e) => {
        //## Sign up methot
        if(newUser && loginUser.email && loginUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loginUser.email, loginUser.password)
            .then(result => {
                const newUserInfo = {...loginUser};
                newUserInfo.error = "";
                newUserInfo.loginSuccess = true;
                setLoginUser(newUserInfo)
                history.replace(from);
                updateUserName(loginUser.name)
            })
            .catch(err => {
                const newUserInfo = {...loginUser};
                newUserInfo.loginSuccess = false;
                newUserInfo.error = err.message;
                setLoginUser(newUserInfo)
              });
        }
        //## Sign in Methot ## 
        if(!newUser && loginUser.email && loginUser.password) {
            firebase.auth().signInWithEmailAndPassword(loginUser.email, loginUser.password)
            .then(result => {
                const newUserInfo = {...loginUser};
                newUserInfo.error = ""
                newUserInfo.loginSuccess = true
                setLoginUser(newUserInfo);
                history.replace(from);
            })
            .catch(function(error) {
                const newUserInfo = {...loginUser};
                newUserInfo.loginSuccess = false;
                newUserInfo.error = error.message;
                setLoginUser(newUserInfo)
              });
        }
        e.preventDefault();
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName, email} = result.user;
            console.log(displayName,email)
            const signInUser = {
                isSignIn: true,
                error: '',
                name: displayName,
                email: email,
                loginSuccess: true
            }
            setLoginUser(signInUser)
            history.replace(from);

          }).catch(function(error) {
            const errorMessage = error.message;
            const email = error.email;
            console.log(email, errorMessage)
          });
    }

    const providerFB = new firebase.auth.FacebookAuthProvider();
    const handleFBSignIn = () => {
        firebase.auth().signInWithPopup(providerFB).then(function(result) {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
          }).catch(function(error) {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage)
          });

    }

    return (
        <div className="container">
            <HeaderD></HeaderD>
            <div className="login-form">
                <div className="create-form">
                    <form onSubmit={handleSubmit}>
                        <h3>Create an account</h3>
                        {newUser?
                        <>
                        <input type="text" onBlur={handleBlur} name="name" className="form-control my-3" placeholder="First Name"/>
                        <input type="text" onBlur={handleBlur} name="last" className="form-control my-3" placeholder="Last Name (Optional)"/>
                        </>: ''}
                        <input type="email" onBlur={handleBlur} name="email" className="form-control my-3" placeholder="Username or Email" required/>
                        <input type="password" onBlur={handleBlur} name="password" className="form-control my-3" placeholder="Password" required/>
                        {newUser? <input type="password" onBlur={handleBlur} name="confirm-password" className="form-control my-3" placeholder="Confirm Password" required/>:""}
                        <Link to={`/search/${place}`}>
                        <input type="submit" className="btn btn-warning start-booking-btn" value={newUser? "Create an account": "Login"}/>
                        {/* {
                        newUser? <button type="submit" className='btn btn-warning start-booking-btn'>Create an account</button>
                        : <button type="submit" className='btn btn-warning start-booking-btn'>Login</button>
                        } */}
                        </Link>
                        {newUser? <div className="text-center">
                        <small>Already have an account? </small> 
                        <small onClick={()=> setNewUser(!newUser)}><a href="#"> Login</a></small>
                        </div> : 
                        <div className="text-center">
                        <small>Create a new account? </small> 
                        <small onClick={()=> setNewUser(!newUser)}><a href="#"> Sign up</a></small>
                        </div>}
                    </form>
                </div>

                    <p style={{textAlign: "center", color: "red", margin: "10px"}}>{loginUser.error}</p>
                    {
                        loginUser.loginSuccess && 
                        <p style={{textAlign: "center", color: "green", padding: "10px", border: "1px solid green"}}>
                            your account {newUser? "create": "logged in"} succesfully</p>
                    }

                <p className="text-center mt-3">or</p>
                <div className="fb-login" onClick={handleFBSignIn}>
                    <img src={fbLogo} alt=""/>
                    <span>Continue with Facebook</span>
                </div>
                <div className="google-login" onClick={handleGoogleSignIn}>
                    <img src={Glogo} alt=""/>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;