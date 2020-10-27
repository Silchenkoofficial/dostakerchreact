import React from 'react';
import './Main.css';

import { Link } from 'react-router-dom';

function SendOrderButton({title, description, openModal}) {
    return (
        <Link
            className="card"
            to="/"
            onClick={() => openModal()}
        >
            <div className="card__icon">
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23 20.75V8.25C24.3807 8.25 25.5 7.13071 25.5 5.75V3.25C25.5 1.86929 24.3807 0.75 23 0.75H3C1.61929 0.75 0.5 1.86929 0.5 3.25V5.75C0.5 7.13071 1.61929 8.25 3 8.25V20.75C3 22.1307 4.11929 23.25 5.5 23.25H20.5C21.8807 23.25 23 22.1307 23 20.75ZM5.50001 20.75V8.25H20.5V20.75H5.50001ZM9.25001 12V9.5H16.75V12H9.25001ZM2.99999 5.75V3.25H23V5.75H2.99999Z" fill="#FF5C00" />
                </svg>
            </div>
            <div className="card__title">
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default SendOrderButton
