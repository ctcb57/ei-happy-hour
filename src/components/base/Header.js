import React from 'react';
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

const Header = () => {
    return (
        <>  
            <Navigation />
            <header className="header">
                <div className="header__logo-box">
                    <Link to={"/"}>
                        <img alt="Logo" className="header__logo" data-uk-img="" src="https://heliumbooks-webapp.s3.us-east-2.amazonaws.com/a6fb3590a9a94e8db581a4b340397689+(1).png"/>
                    </Link>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Expert Institute</span>
                        <span className="heading-primary--sub">Happy Hour</span>
                    </h1>
                </div>
            </header>
        </>
    )
}

export default Header;