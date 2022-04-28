import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Order = () => {
    // userAuthTake 
    const [user] = useAuthState(auth);
    // show individual user data from db, based on email 
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const getOrderDataFromDb = async()=>{
            const email = user?.email; 
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);
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