import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import authService from '../../../../api/authService';
import { AuthContext, AuthContextType } from '../../../../context/AuthContext';


type FormValues = {
    email: string;
    password: string;
};


function Login() {

    const { register, handleSubmit } = useForm<FormValues>()

    const { login: adminLogin } = useContext(AuthContext) as AuthContextType


    const onSubmit = (data: FormValues) => {
        authService.login(data.email, data.password)
            .then(res => {
                adminLogin()
            })
            .catch(err => {
                alert('Login Failed')
            })
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