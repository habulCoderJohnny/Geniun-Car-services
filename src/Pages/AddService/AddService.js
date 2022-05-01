import React from 'react';
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
const AddService = () => {
    // const navigate = useNavigate();
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://agile-plains-88208.herokuapp.com/service`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })   
           /*if (register) {
            register.target.reset();
            toast('your service successfully added');
            navigate('/home#go-to-services'); 
        }   */
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add a Service!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column column-gap-4">
                <input {...register("name", { required: true, maxLength: 20 })} className='mb-2' placeholder='Name' />
                <textarea  {...register("description", { pattern: /^[A-Za-z.,!"&#]+$/i })} className='mb-2' placeholder='Description'/>
                <input type="number" {...register("price", { min: 50, max: 100000 })} className='mb-2' placeholder='Price (min:50)' />

                <input type="text" {...register("img")} className='mb-2' placeholder='Photo Url' />
                <input className='mb-2' placeholder='' type="submit" value="Add service"/>
            </form> 
        </div>
    );
};

export default AddService;