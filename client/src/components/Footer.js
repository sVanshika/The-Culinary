import React from 'react';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footerContainer">
                <div>
                    <h1 className="mt-3 mb-3">Never miss a Recipe!</h1>
                    <p>Subscribe to The Cuilnary</p>
                    <p><strong>Get regular updates about delicious recipies!</strong></p>
                    <a href="/register" className="button signUpBtn mt-3 mb-3">Sign Up</a>
                    {/* <button className="btn btn-primary signUpBtn mt-3 mb-3">Sign Up</button> */}
                </div>
            </div>
            <p className="mt-3">crafted with &hearts; <em>by</em> Team Culinary</p>
        </div>
    )
};

export default Footer;