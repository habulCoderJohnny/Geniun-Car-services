import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear(); //FullYear means: 2022 4 sonkha ta
    return (
        <footer className='text-center mt-5'>
        <p>Copyright ©{year} by J-Planet</p>

        </footer>
    );
};

export default Footer;