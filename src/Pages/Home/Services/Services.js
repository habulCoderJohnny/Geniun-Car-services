import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

//services data fetch & map korbo then data dekhanor jonno services ar child compo <service> create korbo then sekhane data dekhabo
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://agile-plains-88208.herokuapp.com/service')
        .then(res=> res.json())
        .then(data=> setServices(data));
    },[]);

    return (
        <div id='go-to-services' className='container'>
            <h1 className='text-primary text-center m-5'>Current Our Services:  {services.length}</h1>
            {/* 1st: create <Service compo> then sent data in props service name-e */}
            <div className='services-container'> 
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;