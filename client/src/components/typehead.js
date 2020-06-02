import React from 'react';
import { Link } from 'react-router-dom';

const TypeHead = ({ establishmentName, id }) => {
    return (
        <>
            <div className="col-md-12 align-items-center justify-content-center typehead-dropdown">
                <Link className="typehead-dropdown__menu" to={`/hotel-specific/${id}`}>{establishmentName}</Link>
                <hr />
            </div>
        </>
    )
}

export default TypeHead;