import React from 'react';
import './SideButtons.css';

function SideButtons() {
    return (
        <div className="SideButtons">
            <button className="new-video"> <b> New Video <span> + </span> </b> </button>
            <button autoFocus> <b> Home </b> </button>
            <button> <b> Templates </b> </button>
            <button> <b> All Videos </b> </button>
        </div>
    );
}

export default SideButtons;