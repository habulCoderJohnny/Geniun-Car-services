import React from 'react';
import MyLocation from '../GoogleMaps/MyLocation';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div className='text-center'>
            <PageTitle title='About'>
            </PageTitle>
            <h2>About us</h2>
            <MyLocation></MyLocation>
        </div>
    );
};

export default About;