import React from 'react';

const LargeButton = ({message, link}) => {
    return (
        <>
            <div className="header__text-box">
                <a href={`${link}`} className="btn btn--white btn--animated">{message}</a>
            </div>
        </>
    )
}

export default LargeButton;