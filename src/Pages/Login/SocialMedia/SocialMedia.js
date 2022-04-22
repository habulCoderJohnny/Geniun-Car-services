import React from 'react';
import google from '../../../Images/social/google.png';
import fb from '../../../Images/social/fb.jpg';
import github from '../../../Images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialMediaLogin = () => {
    // google-1st
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //github-1st
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    // signin to navigate
    const navigate = useNavigate();
    // social btn blink issue 
    let errorBtnElement;
    //error showing
    // return: errorBtnElement=
    if (error || error1) {
        errorBtnElement = <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading) {
    return <Loading></Loading>
    }

    // user signin to navigate
    if (user || user1) {
        // 1st-d
        navigate ('/home');
  
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
            <button className='btn btn-danger w-50 d-block mx-auto my-2'>
                <img style={{ width: '36px', marginLeft: '6px' }} src={fb} alt="" />
                <span className='px-2'>Sign In with Facebook</span>
            </button>
            {/* github signin btn  */}
            <button onClick={()=>signInWithGithub()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={github} alt="" />
                <span className='px-2'>Sign In with Github</span>
            </button>
        </div>
    );
};

export default SocialMediaLogin;