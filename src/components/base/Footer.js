import React from 'react';

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="row">
                <div className="col-1-of-2">
                        <div className="footer__content">
                            <a 
                                href="mailto:charles.t.clark89@gmail.com"
                                className="footer__content--text"
                            >Contact Us</a>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="footer__content">
                            <a 
                                className="footer__content--text"
                                href="https://www.linkedin.com/in/charles-c-830350190/"
                            >About Charles Clark</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;