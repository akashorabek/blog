import React from 'react';
import './search.css';

function Search () {
    return (
        <div className="search_schedule">
            <div className="search_block">
                <input className="search_input" placeholder="Search..." /> 
            </div>
            <div className="schedule_block">
                <p>The library is open today</p>
                <h1>6:00 AM - 8:00 PM</h1>
            </div>
        </div>
    )
};

export default Search;