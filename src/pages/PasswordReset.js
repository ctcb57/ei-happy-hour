import React from 'react';

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import PasswordReset from "../components/auth/PasswordReset";

const PasswordResetPage = () => {

    return (
        <>
            <Header />
            <br/>
            <PasswordReset />
            <br/>
            <Footer />
        </>
    )
}

export default PasswordResetPage;