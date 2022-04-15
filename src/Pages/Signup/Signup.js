import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    //for navigate to login form
    const navigate = useNavigate();
    const navigateLogin = event =>{
        navigate('/login');
    }
    const sigupFormSubmit = event =>{
        event.preventDefault();
        // taking input data diffent way 2
        /* console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log = event.target.password.value;*/
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // validation
    }
    return (
        <div>
            <h2 className='text-center mt-4 text-primary'>Sign Up</h2>
            <form onSubmit={sigupFormSubmit} className='signup-form'>
                <input type="text" name="name" id="" placeholder='Your Name' required/>

                <input type="email" name="email" id=""  placeholder='Your valid email'required/>

                <input type="password" name="password" id=""  placeholder='Your secure password' required/>
                {/* Toggle */}
                <p className='text-center'>Already have an Account? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Plz Sign In</Link></p>
                <input type="submit" value="Signing up.." />
            </form>
        </div>
    );
};

export default Signup;