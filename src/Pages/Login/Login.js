import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    // 1st use    of     useRef
    // const refContainer = useRef(initialValue);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // 5th for toggle func
    const navigate = useNavigate();
      //4th for navigate signup page
      const navigateSignup = event =>{
        // 6th
        navigate('/signup');
    }
    // 3rd for taking input data diffent way 1
    const logInSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log('email:',email, 'password:',password);
        //Validation  
    }
  
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please login</h2>
            <Form onSubmit={logInSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {/* Toggle */}
                <p>New to Genius car? <Link className='text-danger pe-auto text-decoration-none' to='/signup' onClick={navigateSignup}>Plz Signup</Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        
        </div>
    );
};

export default Login;