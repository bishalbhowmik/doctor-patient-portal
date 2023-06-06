import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment,setTreatment, selectDate }) => {

    const date = format(selectDate, 'PP');

    const { name,slots } = treatment;

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;

        const treatmentName = name;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const formData ={
            treatmentName,
            selectedDate: slot,
            patientName,
            phone,
            email

        }
        // console.log(treatmentName,slot,patientName,phone,email);
        console.log(formData);
        setTreatment(null)

    }
    return (
        <>


            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer text-center">
                <label className="modal-box relative" htmlFor="my-modal-4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleForm}>
                        <input type="text" disabled value={date} className="input input-bordered w-full max-w-sm my-3" />
                        <select name="slot" className="select select-bordered w-full max-w-sm">
                           {
                            slots.map((slot,i)=><option
                            key={i}
                            value={slot}>{slot}</option>)
                           }
                        </select>
                        <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full max-w-sm my-3" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-sm" />
                        <input name="email" type="text" placeholder="Email" className="input input-bordered w-full max-w-sm my-3" />
                        <input type="submit" value="Submit" className='btn bg-accent w-full max-w-sm' />
                    </form>
                </label>
            </label>

        </>
    );
};

export default BookingModal;