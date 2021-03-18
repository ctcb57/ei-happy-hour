import React, { useState } from 'react';

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import SignUp from '../components/auth/SignUp';


const SignUpPage = () => {

    return (
        <>
            <Header />
            <br />
            <SignUp />
            <br />
            <Footer />
        </>
    )
}

export default SignUpPage;