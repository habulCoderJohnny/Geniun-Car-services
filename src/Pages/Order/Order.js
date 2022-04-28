import axios from 'axios';
import React, { useEffect, useState }  from 'react';
    // get data from db
const Order = () => {
    const [orders, setOrders] = useState();
    useEffect(()=>{
        const getOrderDataFromDb = async()=>{
            const url = `http://localhost:5000/order`;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrderDataFromDb();
    },[])
    return (
        <div>
            <h1>Your Orders: {orders.length}</h1>
        </div>
    );
};

export default Order;