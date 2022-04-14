import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    //url-4
    const {serviceId} = useParams();

    return (
        <div>
            <h2>welcome to detail:  {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;