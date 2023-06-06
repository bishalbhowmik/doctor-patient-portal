import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../../BookingModal/BookingModal';

const AppointmentOptions = ({selectDate}) => {

    const [appointmentOption, setAppointmentOption] = useState([]);

    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))

    }, [])


    return (

        <div className='grid gap-3 gap-y-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appointmentOption.map(option => <AppointmentOption
                    key={option._id}
                    option={option}
                    setTreatment = {setTreatment}
                ></AppointmentOption>)
            }

          {
            treatment &&   <BookingModal
            treatment = {treatment}
            setTreatment={setTreatment}
            selectDate={selectDate}

            ></BookingModal>
          }
        </div>
    );
};

export default AppointmentOptions;