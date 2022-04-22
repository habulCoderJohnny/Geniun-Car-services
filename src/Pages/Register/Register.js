import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialMedia from '../Login/SocialMedia/SocialMedia';
import Loading from '../Shared/Loading/Loading';


const Register = () => {
    //reg-auth-3rd 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
           ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [agree, setAgree] = useState(false);


    //2nd-toggle Navigate part: for navigate to login form
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }

    if (loading) {
        return <Loading></Loading> 
    }

      //reg-auth-3rd-b|user Register korle than navigate kore home e pathabo
    if (user) {
        console.log('user', user);  
        // navigate('/home');
    }


      
    const registerFormSubmit = async event => {
        event.preventDefault();
        // 1st taking input data
        // taking input data diffent way 2
        // console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        // validation if(){}

        //reg-auth-3rd-a 
        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div>
            <h2 className='text-center mt-4 text-primary'>Create your Profile</h2>
            <form onSubmit={registerFormSubmit} className='register-form'>
                <input type="text" name="name" id="1" placeholder='Your Name' required />

                <input type="email" name="email" id="2" placeholder='Your valid email' required />

                <input type="password" name="password" id="3" placeholder='Your secure password' required />
                {/* Checkbox */}
                <input onClick={() => setAgree(!agree)}  type="checkbox" name="terms" id="terms" />
                {/* <label className='ps-2' htmlFor="terms">Accept Terms & Condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                {/* Toggle */}
                
                <input disabled={!agree} className='btn btn-primary w-25 mx-auto btn-rounded' type="submit" value="Register..." />
            </form>
            <p className='mt-2 text-center'>Already have an Account? <Link className='text-primary pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Plz Login</Link></p>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Register;