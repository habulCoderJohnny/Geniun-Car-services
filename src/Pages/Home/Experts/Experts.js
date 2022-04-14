import React from 'react';
import Expert from '../Expert/Expert';
import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-3.jpg';
import expert4 from '../../../Images/experts/expert-4.jpg';
import expert5 from '../../../Images/experts/expert-5.jpg';
import expert6 from '../../../Images/experts/expert-6.jpg';



const experts = [
    {id: 1, name:'Will smith', img: expert1},
    {id: 2, name:'Chris Rock', img: expert2},
    {id: 3, name:'Willow Smith', img: expert3},
    {id: 4, name:'Jaden Smith', img: expert4},
    {id: 5, name:'Trey Smith', img: expert5},
    {id: 6, name:'Jada Pinkett Smith', img: expert6},
]
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center m-4'>Our Expertise</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;