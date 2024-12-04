import React from 'react'
import { Link } from 'react-router-dom'

const AuthRegister = () => {
	return (
		<div className='mx-auto w-full max-w-md space-y-6'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold tracking-tight text-foreground'>
                    <p className='mt-2'>Already have an Account?</p>
                    <Link className='font-medium text-primary hover:underline' to= "/auth/login">LogIn</Link>
                </h1>
            </div>

        </div>
	)
}

export default AuthRegister