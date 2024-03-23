import React from 'react';
import './Header.css';


function Header(){
    return(
        <div className="header">

            <div className="search">
                <input type="text" placeholder="search..." />
                <button> SEARCH </button>
            </div>

            <div className="profile">
                <button> <b> B </b> </button>
            </div>      

        </div>
    );
}

export default Header;