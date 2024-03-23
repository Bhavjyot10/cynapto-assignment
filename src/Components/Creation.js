import React from 'react';
import './Creation.css';

function Creation() {
    return (
        <div className="Creation">
            <button style={{ color: '#f511c0' }}> <b> Create Project </b> </button>
            <button style={{ color: '#ed2f52' }}> <b> Record Video </b> </button>
            <button style={{ color: '#2fa4ed' }}> <b> Record Podcast </b> </button>
            <button style={{ color: '#f2de49' }}> <b> Go Live </b> </button>
        </div>
    );
}

export default Creation;