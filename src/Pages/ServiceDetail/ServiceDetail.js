import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
       //url-4
       const {serviceId} = useParams();
       const [service] = useServiceDetail(serviceId);

 
    return (
        <div className='text-center'>
            <h2>Read more this service:  {service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
            <button className='btn btn-primary'>Proceed to Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;