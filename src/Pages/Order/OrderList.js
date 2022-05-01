import React from 'react';

const OrderList = ({order}) => {
    const {email, service, serviceId,addess,phone} = order;
    return (
        <div className='w-50 mx-auto'>
            {email}:{service}
        </div>
    );
};

export default OrderList;