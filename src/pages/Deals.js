import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Deals = () => {
    return (
        <>
            <Nav />
            <div className="container-fluid mt-5 mb-4">
                <h2>Deals and promotions</h2>
                <p>Shoap Today's Deals Lighting Deals and limited-time discounts</p>

                <div className="row d-flex justify-content-evenly">
                    <div className="col-md-2">1</div>
                    <div className="col-md-9">2</div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Deals;
