import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
const Home = () => {
    return (
        <>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
        </>
    );
};

export default Home;