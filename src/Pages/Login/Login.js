import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialMediaLogin from './SocialMediaLogin/SocialMediaLogin';

const Login = () => {
    // 1st-useRef
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // 4th-a visitor
    const location = useLocation();
    //4th  visitor's desire page info
    const from = location?.state?.from?.pathname || "/";

    // login-auth-3rd 
    const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);
    // 2nd-b for toggle func
    const navigate = useNavigate();
    //2nd-a for navigate Register page
    const navigateRegister = event => {
        // 2ndc
        navigate('/register');
    }
       //login-auth-3rd-c|user Register korle than navigate kore home e pathabo
       if (user) {
        navigate('/home');
        // 4th-b visitor site will go redirect of visitor's desire page
        navigate(from,{replace:true});
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {/*2nd Toggle */}
                <p>New to Genius car? <Link className='text-danger pe-auto text-decoration-none' to='/register' onClick={navigateRegister}>Plz Register</Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        <SocialMediaLogin></SocialMediaLogin>

        </div>
    );
};

export default Login;