import React from 'react'
import { useForm, Resolver } from 'react-hook-form';


type FormValues = {
    email: string;
    password: string;
};


function Login() {

    const { register, handleSubmit } = useForm<FormValues>()


    const onSubmit = (data: FormValues) => {

    }

    return <>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">EMail</label>
                <input type='text' {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type='password' {...register("password")} />
            </div>
            <button type='submit'>Login</button>
        </form>
    </>
}

export default Login