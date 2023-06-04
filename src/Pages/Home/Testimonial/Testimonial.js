import React from 'react';
import quote from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    return (

        <div className="hero flex flex-row-reverse justify-between">
            
                <div>
                    <img src={quote} className="w-[192px] h-[156px] rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h3 className="text-xl text-secondary font-bold">Testmonial</h3>
                    <h1 className="py-2 text-4xl">What Our Patients Says</h1>
                </div>
        </div>

    );
};

export default Testimonial;