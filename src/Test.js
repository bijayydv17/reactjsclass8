import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
    return (
        <>
            <Link to="">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/service">Service</Link>&nbsp;
            <Link to="/contact">Contact</Link>
        </>
    );
}

export default Test;

