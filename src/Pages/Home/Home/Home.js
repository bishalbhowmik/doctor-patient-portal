import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../Banner/InfoCards/InfoCards';
import Services from '../Services/Services';
import BannerTwo from '../BannerTwo/BannerTwo';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <BannerTwo></BannerTwo>
          <Appointment></Appointment>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;