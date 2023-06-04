import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import phone from '../../../../assets/icons/phone.svg';
import marker from '../../../../assets/icons/marker.svg';
import InfoCard from './InfoCard';


const InfoCards = () => {

    const cards = [
        {
            id:1,
            img: clock,
            title: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            bgColor: 'bg-primary'
        },
        {
            id:2,
            img: marker,
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            bgColor: 'bg-accent',
        },
        {
            id:3,
            img: phone,
            title: 'Contact us now',
            description: '+000 123 456789',
            bgColor: 'bg-secondary',
        }
    ]

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-400'>
            {
                cards.map(card => <InfoCard
                key= {card.id}
                card ={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;