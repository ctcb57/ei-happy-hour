import React from 'react';

const LargeButton = ({message, link}) => {
    return (
        <>
            <div className="large-button">
                <a href={`${link}`} className="btn btn--purple btn--animated">{message}</a>
            </div>
        </>
    )
}

export default LargeButton;