import React, { useState } from 'react';

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import LoginSection from "../components/auth/LoginSection";

const AuthPage = () => {

    return (
        <>
            <Header />
            <br/>
            <LoginSection />
            <br/>
            <Footer />
        </>
    )
}

export default AuthPage;