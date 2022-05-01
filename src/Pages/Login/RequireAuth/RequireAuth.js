import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({children}) => {
    // 1st
    const [user, loading, error] = useAuthState(auth);
    // console.log('inside requireAuth:', user);
    // 3rd
    const location = useLocation();

    const [sendEmailVerification, sending, errorVerify] = useSendEmailVerification(auth);

    
    if(loading){
        return <Loading></Loading>
    }

    // 2nd, jodi user login na thake tahohe then navigate kore login e pathabo
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace />;
    }
    console.log(user);
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center'>
            <h3 className='text-danger'>Your email not varified!</h3>
            <h4 className='text-success'>plz varified!</h4>
            <button onClick={async () => {await sendEmailVerification(); toast('Sent email check inbox/spam');}} 
            className='btn btn-warning'>Resend Verification email</button>
            <ToastContainer></ToastContainer>
        </div>
        
    }
    // 4th
     return children;
};

export default RequireAuth;