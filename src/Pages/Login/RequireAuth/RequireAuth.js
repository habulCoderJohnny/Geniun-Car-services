import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    // 1st
    const [user, loading, error] = useAuthState(auth);
    // 3rd
    const location = useLocation();

    // 2nd, jodi user login na thake tahohe then navigate kore login e pathabo
    // if(loading){
    //     return;

    // }
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace />;
    }
    // 4th
     return children;
};

export default RequireAuth;