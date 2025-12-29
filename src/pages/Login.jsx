import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyThemeContext } from '../App'

const Login = () => {
let theme = useContext(MyThemeContext)

    return (
        <>
            <div className="hero bg-base-200 min-h-[80vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:order-2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 md:px-40 lg:px-20 xl:px-40">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:order-1">
                        <div className="card-body">
                            <fieldset className="fieldset p-2">
                                <label className="label text-xl">Email</label>
                                <input type="email" className="input w-full text-lg!" placeholder="Email" />
                                <label className="label text-xl">Password</label>
                                <input type="password" className="input w-full text-lg!" placeholder="Password" />
                                <div><a className="link link-hover text-lg">Forgot password?</a></div>
                                <button className={`btn mt-4 ${theme}-btn`}>Login</button>
                                <span>Do not have an account? <Link to='/register'>Register</Link></span>

                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login