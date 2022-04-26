import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const [service, setService] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>setService(data))
    },[]);
    //url-4
    const {serviceId} = useParams();

    return (
        <div className='text-center'>
            <h2>Read more this service:  {service.name}</h2>
            <Link to="/checkout"><button className='btn btn-primary'>Proceed to Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;