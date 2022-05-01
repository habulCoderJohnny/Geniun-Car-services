import { signOut } from 'firebase/auth';
import Loading from '../../Pages/Shared/Loading/Loading';
import React, { useEffect, useState }  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import auth from '../../firebase.init';
import OrderList from './OrderList';


const Order = () => {
    // userAuthTake 
    const [user] = useAuthState(auth);
    // show individual user data from db, based on email 
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{

        const getOrderDataFromDb = async()=>{
            const email = user?.email; 
            const url = `https://agile-plains-88208.herokuapp.com/order?email=${email}`;
            //Send jwt token in the server
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if (error.response.status ===401 ||error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrderDataFromDb();
    },[user]);

    if (!user) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1>Your Orders: {orders.length}</h1>
            {
                orders.map(order =><OrderList key={order._id} order = {order}></OrderList>)
            }

        </div>
    );
};

export default Order;