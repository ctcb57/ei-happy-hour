import React from 'react';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo-box">
                    <a href="/">Home</a>
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