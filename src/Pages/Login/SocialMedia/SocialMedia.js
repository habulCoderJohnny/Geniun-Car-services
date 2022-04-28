import React from 'react';
import google from '../../../Images/social/google.png';
import fb from '../../../Images/social/fb.jpg';
import github from '../../../Images/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialMediaLogin = () => {
    // google-1st
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //Fb-1st
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    //github-1st
    const [signInWithGithub, githubUser, gitLoading, gitError] = useSignInWithGithub(auth);
        // visitor
        const location = useLocation();
        // visitor's desire page info
        const from = location?.state?.from?.pathname || "/";

    // signin to navigate
    const navigate = useNavigate();
    // social btn blink issue 
    let errorBtnElement;
    //error showing
    // return: errorBtnElement=
    if (error ||fbError|| gitError) {
        errorBtnElement = <p className='text-danger text-center'>Error: {error?.message} {gitError?.message}</p>
    }
    if (loading||fbLoading|| gitLoading ) {
    return <Loading></Loading>
    }

    // user signin to navigate
    if (user ||fbUser|| githubUser) {
        navigate(from,{replace:true});
  
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
            <button onClick={()=>signInWithFacebook()} className='btn btn-danger w-50 d-block mx-auto my-2'>
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