import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const Service = ({service}) => {
    const {_id,img, price, description, name} = service;
    //url-3rd declore useNavigate
    const navigate = useNavigate();
    //url-2nd declore event handler
    const navigateToServiceDetail = id =>{
        //url-4th
        navigate(`/service/${id}`);
    }
    return (
        <div className='service' id='go-to-services'>
            <PageTitle title='Services'></PageTitle>
            <img src={img} alt="" />
            <h3>Name:  {name}</h3>
            <h5>Price ${price}</h5>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetail(_id)} className="btn btn-primary mb-2">Book: {name}</button>

        </div>
    );
};

export default Service;