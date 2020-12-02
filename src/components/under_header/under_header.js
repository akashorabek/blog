import React from 'react';
import './under_header.css';
import mountain from '../../imgs/mountain.jpg';

function Under_header() {
    return (
        <div className="under_header">
            <img src={mountain} />
            <div className="under_header_title">
                <h1>How The Rocky Mountains Were Discovered</h1>
            </div>
        </div>
    )
};

export default Under_header;