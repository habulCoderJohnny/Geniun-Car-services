import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices()

    const handleRemover = id =>{
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            //gettingdata 
            const url = `https://agile-plains-88208.herokuapp.com/service/${id}`;
            fetch(url,{method:'DELETE'})
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                //for remove data from ui
                const remaining = services.filter(service=> service._id !==id);
                setServices(remaining);
            })
        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage ur service</h2>
            {
                services.map(service=> <div key={service._id}>
                    <h5>{service.name}<button onClick={()=>handleRemover(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;