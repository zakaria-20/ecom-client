import React from 'react'
import MainLayout from '../layouts/main'
import SignupFormLayout from '../layouts/authentication/signup';
import SignupForm from '../components/authentication/signup';
function SignUpView(){
    return (
        <>
        <MainLayout>
            <SignupFormLayout>
                <SignupForm />
            </SignupFormLayout>
        </MainLayout>
        </>
    )
}

export default SignUpView;