import CommonForm from '@/components/common/form'
import { loginFormControls } from '@/config'
import { useToast } from '@/hooks/use-toast'
import { loginUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const AuthLogIn = () => {
	const [formData, setFormData] = useState({
        email:'',
        password:'',
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {toast} = useToast();
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await dispatch(loginUser(formData));
            if(res?.payload?.Success){
                toast({
                    title: "LogIn Successful",
                    description: res?.payload?.message,
                })
                setFormData({
                    email:'',
                    password:'',
                })
                // navigate('/auth/login');
            }else{
                toast({
                    title: "LogIn Un-Successful",
                    description: res?.payload?.message,
                })
            }
        } catch (error) {
            console.error(`Error Occurred While LogIn User: ${error.message}`);
        }
    }
	return (
		<div className='mx-auto w-full max-w-md space-y-6'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold tracking-tight text-foreground'>
                    Log In to You Account
                </h1>
                <p className='mt-2'>
                    Don't have an Account? 
                    <Link className='font-medium ml-2 text-primary hover:underline' to= "/auth/register"> Register</Link>
                </p>
            </div>
            <CommonForm formControls={loginFormControls} setFormData={setFormData} formData={formData} onSubmit={onSubmit} buttonText={"Log In"}/>
        </div>
	)
}

export default AuthLogIn