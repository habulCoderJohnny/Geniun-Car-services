import { async } from '@firebase/util';
import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialMediaLogin from './SocialMedia/SocialMedia';

const Login = () => {
    // 1st-useRef
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // 4th-a visitor
    const location = useLocation();
    //4th  visitor's desire page info
    const from = location?.state?.from?.pathname || "/";

    // login-auth-3rd 
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
     //foget password recover
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    // 2nd-b for toggle func
    const navigate = useNavigate();
    //2nd-a for navigate Register page
    const navigateRegister = event => {
        // 2ndc
        navigate('/register');
    }
    // Reset Password function
     const resetPassword = async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');

     }

        //taking input data diffent way 1
        const logInSubmit = event => {
            event.preventDefault();
            // 1st-b useRef
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            // console.log('email:', email, 'password:', password);
            //Validation if(){}
    
            // login-auth-3rd-a
            signInWithEmailAndPassword(email, password) 
        }
    
       //login-auth-3rd-c|user Register korle than navigate kore home e pathabo
     useEffect(()=>{
        if (user) {
            // navigate('/home');
            // 4th-b visitor site will go redirect of visitor's desire page
            navigate(from,{replace:true});
        }
     },[user,from,navigate]);

    // error showing (conditional render)
    let errorBtnElement;
    if (error) {
        errorBtnElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center font-weight-light mt-2'>
                <u>Please login</u></h2>
            <Form onSubmit={logInSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control ref={emailRef} /*1st-a useRef*/ type="email"  placeholder="Enter email" /> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorBtnElement}
                <Button variant="btn btn-primary btn-rounded w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
                {/*2nd Toggle */}
                <p>New to Genius car? <Link className='text-primary pe-auto text-decoration-none' to='/register' onClick={navigateRegister}>Plz Register</Link></p>
                {/* Reset password  */}
                <p>Forget Password? <Link className='text-primary pe-auto text-decoration-none' to='/register' onClick={resetPassword}>Reset Password</Link></p>
            </Form>
        <SocialMediaLogin></SocialMediaLogin>

        </div>
    );
};

export default Login;