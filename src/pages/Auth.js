import React, { useState } from 'react';

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import LoginSection from "../components/auth/LoginSection";

const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (email, password) => {
        setEmail(email);
        setPassword(password);
    }

    return (
        <>
            <Header />
            <br/>
            <LoginSection 
                email={email}
                password={password}
                handleChange={handleChange}
            />
            <br/>
            <br/>
            <br/>
            <Footer />
        </>
    )
}

export default AuthPage;