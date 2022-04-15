import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    //url-4
    const {serviceId} = useParams();

    return (
        <div className='text-center'>
            <h2>welcome to detail:  {serviceId}</h2>
            <Link to="/checkout"><button className='btn btn-primary'>Proceed to Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;