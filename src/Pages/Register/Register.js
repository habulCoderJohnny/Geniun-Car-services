import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';

const Register = () => {
    //reg-auth-3rd 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
           ] = useCreateUserWithEmailAndPassword(auth);

    //2nd-toggle Navigate part: for navigate to login form
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }

      //reg-auth-3rd-b|user Register korle than navigate kore home e pathabo
    if (user) {
        navigate('/home');
    }

      
    const registerFormSubmit = event => {
        event.preventDefault();
        // 1st taking input data
        // taking input data diffent way 2
        // console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // validation if(){}

        //reg-auth-3rd-a 
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <h2 className='text-center mt-4 text-primary'>Create your Profile</h2>
            <form onSubmit={registerFormSubmit} className='register-form'>
                <input type="text" name="name" id="1" placeholder='Your Name' required />

                <input type="email" name="email" id="2" placeholder='Your valid email' required />

                <input type="password" name="password" id="3" placeholder='Your secure password' required />
                {/* Toggle */}
                <p className='text-center'>Already have an Account? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Plz Login</Link></p>
                <input type="submit" value="Register..." />
            </form>
        </div>
    );
};

export default Register;