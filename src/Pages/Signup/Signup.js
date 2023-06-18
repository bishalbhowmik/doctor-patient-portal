import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signupError, setSignupError] = useState();

    const { createUser, update } = useContext(AuthContext);

    const handleSignup = data => {
        console.log(data);

        setSignupError('');


        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    displayName: data.name
                }
                const user = result.user;
                toast('User Created Successfully')
                console.log(user);
                update(userInfo)
                    .then(() => { })
                    .catch()
            })
            .catch(error => {
                console.error(error.message);
                setSignupError(error.message);
            });
    };


    return (

        <div className='flex flex-col items-center justify-center h-[100vh]'>
            <div className='shadow-lg p-10 rounded w-[500px]'>
                <form onSubmit={handleSubmit(handleSignup)}>
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
                            minLength: { value: 6, message: 'Password must be 6 character long' },
                            pattern: { value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])./, message: 'Password should be strong' }
                        })} name="password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-gray-500'>{errors.password?.message}</p>}

                    </div>
                    <div className='text-red-600'>
                        {signupError}
                    </div>

                    <button className='btn btn-accent w-full text-white'>SignUp</button>

                    <h3 className='text-sm mt-4 w-[90%] text-center'>Already have an account? <Link to='/login' className='text-secondary'>Please Log In</Link></h3>

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>
                    </div>


                </form>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Signup;