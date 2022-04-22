import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4' id='go-to-experts'>
            <PageTitle title='Experts'> </PageTitle>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
};

export default Expert;