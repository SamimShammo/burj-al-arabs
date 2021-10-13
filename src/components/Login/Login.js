import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import logo from './images/logo.svg'
import logonew from './images/login.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';



const Login = () => {
  
const {user, seterror, error, setUser, signWithGoogle, hadnleSubmit, signinWithGithub} = useAuth();
const location = useLocation()
const history = useHistory()
const redirect_uri = location.state?.from || './home'

const googleSignInwithGoogle = () => {
      signWithGoogle()
      .then(result =>{
        console.log(result.user)
        setUser(result.user)
        history.push(redirect_uri)
    })
    .catch(error => {
        seterror(error.message)
    })
}
const githubSigninWithGithub = () => {
    signinWithGithub()
      .then(result =>{
        console.log(result.user)
        setUser(result.user)
        history.push(redirect_uri)
    })
    .catch(error => {
        seterror(error.message)
    })
}

    return (
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img src={logonew} alt="login" className="login-card-img"/>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <div className="brand-wrapper">
                    <img  src={logo} alt="logo" className="logo"/>
                  </div>
                  <p className="login-card-description">Sign into your account</p>
                  <form onSubmit={hadnleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email address" />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="***********" />
                      </div>
                      <button name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" >Login</button>
                      <p className="text-center">----or----</p>
                   
                       <div className="col-lg-12">
                       <div className="row">
                       <button  className="btn btn-block login-btn mb-4" type="button" value="Login" onClick={googleSignInwithGoogle}>Google</button>
               
                       <button  className="btn btn-block login-btn mb-4  " type="button"    value="Login" onClick={githubSigninWithGithub}>Github</button>
                       </div>
                       </div>
                     
                      <p></p>
                    </form>
                    <Link to="/login" className="forgot-password-link">Forgot password?</Link>
                    <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                    <nav className="login-card-footer-nav">
                      <Link to="/login">Terms of use.</Link>
                      <Link to="/login">Privacy policy</Link>
                    </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div className="card login-card">
            <img src="assets/images/login.jpg" alt="login" className="login-card-img">
            <div className="card-body">
              <h2 className="login-card-title">Login</h2>
              <p className="login-card-description">Sign in to your account to continue.</p>
              <form action="#!">
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-prompt-wrapper">
                  <div className="custom-control custom-checkbox login-card-check-box">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                  </div>              
                  <a href="#!" className="text-reset">Forgot password?</a>
                </div>
                <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" />
              </form>
              <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
            </div>
          </div> --> */}
        </div>
      </main>
    );
};

export default Login;