import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
    //for login navigate
    const navigate = useNavigate();
    const navigateLogin = event =>{
        navigate('/signup');
    }
    const sigupFormSubmit = event =>{
        event.preventDefault();
    }
    return (
        <div>
            <h2 className='text-center mt-4 text-primary'>Sign Up</h2>
            <form onSubmit={sigupFormSubmit} className='signup-form'>
                <input type="text" name="Name" id="" placeholder='Your Name' required/>

                <input type="email" name="Email" id=""  placeholder='Your valid email'required/>

                <input type="password" name="Password" id=""  placeholder='Your secure password' required/>
                {/* Toggle */}
                <p className='text-center'>Already have an Account? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Plz Sign In</Link></p>
                <input type="submit" value="Signing up.." />
            </form>
        </div>
    );
};

export default Signup;