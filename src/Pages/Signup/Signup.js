import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {

    const {register,handleSubmit, formState:{errors}} = useForm();

    const handleSignup = data =>console.log(data);


    return (

        <div className='flex flex-col items-center justify-center h-[100vh]'>
            <form className='shadow-lg p-10 rounded w-[500px]' onSubmit={handleSubmit(handleSignup)}>
                <h2 className='text-black text-center text-3xl'>Sign Up</h2>


                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", {
                        required: "This field is required"
                    })} name="name" className="input input-bordered w-full" />
                    {errors.name && <p className='text-gray-500'>{errors.name?.message}</p>}
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", {
                        required: "This field is required"
                    })} name="email" className="input input-bordered w-full" />
                    {errors.email && <p className='text-gray-500'>{errors.email?.message}</p>}
                </div>


                <div className='mb-4'>

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password", {
                        required: "This field is required",
                        minLength: { value: 6, message: 'Password must be 6 character long' }
                    })} name="password" className="input input-bordered w-full" />
                    {errors.password && <p className='text-gray-500'>{errors.password?.message}</p>}

                </div>

                <button className='btn btn-accent w-full'>SignUp</button>

                <h3 className='text-xs mt-4 w-[90%] text-center'>Already have an account? <Link to='/login' className='text-secondary'>Please Log In</Link></h3>

                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>
                </div>

                <button className='btn btn-outline w-full'>Continue With Google</button>
            </form>




        </div>
    );
};

export default Signup;