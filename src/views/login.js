import React from 'react'
import MainLayout from '../layouts/main'
import LoginFormLayout from '../layouts/authentication/login';
import LoginForm from '../components/authentication/login';
function LogInView(){
    return (
        <>
        <MainLayout>
            <LoginFormLayout>
                <LoginForm />
            </LoginFormLayout>
        </MainLayout>
        </>
    )
}

export default LogInView;