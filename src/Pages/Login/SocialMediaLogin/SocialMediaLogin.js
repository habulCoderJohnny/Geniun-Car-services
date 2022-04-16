import React from 'react';
import google from '../../../Images/social/google.png';
import fb from '../../../Images/social/fb.jpg';
import github from '../../../Images/social/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialMediaLogin = () => {
    // google-1st
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // g-c 
    const navigate = useNavigate();
    // social btn blink issue 
    let errorBtnElement;
    //g-a
    // return: errorBtnElement=
    if (error) {
        errorBtnElement = <div>
                <p className='text-danger text-center'>Error: {error.message}</p>
            </div>
    }

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    //g-b
    if (user) {
        // 1st-d
        navigate ('/home');
        // return (
        //     <div>
        //         <p>Signed In User: {user.email}</p>
        //     </div>
        // );
    }

    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
              {errorBtnElement} 
            {/* google signin btn  */}
            <button onClick={()=>signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Sign In with Google</span>
            </button>
            {/* fb signin btn  */}
            <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{ width: '36px', marginLeft: '6px' }} src={fb} alt="" />
                <span className='px-2'>Sign In with Facebook</span>
            </button>
            {/* github signin btn  */}
            <button className='btn btn-dark w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={github} alt="" />
                <span className='px-2'>Sign In with Github</span>
            </button>
        </div>
    );
};

export default SocialMediaLogin;