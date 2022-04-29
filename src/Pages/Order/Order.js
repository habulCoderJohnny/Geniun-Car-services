import { signOut } from 'firebase/auth';
import React, { useEffect, useState }  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import auth from '../../firebase.init';


const Order = () => {
    // userAuthTake 
    const [user] = useAuthState(auth);
    // show individual user data from db, based on email 
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const getOrderDataFromDb = async()=>{
            const email = user?.email; 
            const url = `http://localhost:5000/order?email=${email}`;
            //Send jwt token in the server
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if (error.response.status ===403 ||error.response.status === 401){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrderDataFromDb();
    },[user])
    return (
        <div>
            <h1>Your Orders: {orders.length}</h1>
        </div>
    );
};

export default Order;