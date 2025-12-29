import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-[80vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        <p className="py-6 md:px-20 lg:px-10 xl:px-20">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl md:w-1/2">
                        <div className="card-body">
                            <fieldset className="fieldset p-2">
                                <label className="label text-xl" htmlFor='fname'>First Name</label>
                                <input type="text" className="input w-full text-lg!" placeholder="First Name" id='fname' />
                                <label className="label text-xl" htmlFor='lname'>Last Name</label>
                                <input type="text" className="input w-full text-lg!" placeholder="Last Name" id='lname' />

                                <label className="label text-xl" htmlFor='dob'>Date of Birth</label>
                                <input type="date" className='input w-full text-lg!' id='dob' />

                                <label className='label text-xl'>Gender</label>
                                <div className='flex justify-evenly'>
                                    <div>
                                        <input type="radio" id='male' name='gender' /> <label htmlFor="male" className='label text-lg'>Male</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='female' name='gender' /> <label htmlFor="female" className='label text-lg'>Female</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='other' name='gender' /> <label htmlFor="other" className='label text-lg'>Other</label>
                                    </div>
                                </div>

                                <label className='label text-xl' htmlFor='add'>Address(City)</label>
                                <select id="add" className='text-lg! select w-full'>
                                    <option value="" disabled selected>Choose Your City</option>
                                    <option value="ktm" className=''>Kathmandu</option>
                                    <option value="bkt" className=''>Bhaktapur</option>
                                    <option value="lal" className=''>Lalitpur</option>
                                    <option value="bir" className=''>Birgunj</option>
                                    <option value="pkr" className=''>Pokhara</option>
                                </select>


                                <label className='label text-xl' htmlFor='add'>Description</label>
                                <textarea name="" id="" className='textarea w-full text-lg! resize-none!' rows={4}></textarea>

                                <label className="label text-xl">Photo</label>
                                <input type="file" className="file-input w-full text-lg!" placeholder="Email" />



                                <label className="label text-xl">Email</label>
                                <input type="email" className="input w-full text-lg!" placeholder="Email" />
                                <label className="label text-xl">Password</label>
                                <input type="password" className="input w-full text-lg!" placeholder="Password" />
                                <div>
                                    <input type="checkbox" id='checkbox' className='me-1' />
                                    <span span='text-3xl!'>I accept the terms and conditions.</span>
                                </div>
                                <button className="btn btn-primary mt-4">Register</button>
                                <span>Already have an account? <Link to='/login'>Login</Link></span>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register