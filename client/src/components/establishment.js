import React from 'react';

import { Link } from 'react-router-dom';

const Hotels = ({ establishmentName, imageUrl, id, description, maxGuests, price, establishmentEmail }) => {
    return (
        <>
            <div className="row row__estb">
                <div className="col-md-4 column__estb">
                    <img className="card-img" src={imageUrl} alt={'hotel' + id} />
                </div>
                <div className="col-md-4 column__estb">
                    <h3>{establishmentName}</h3>
                    <br />
                    <p>{description}</p>
                    <p><img src="https://img.icons8.com/ios-filled/24/000000/email.png" alt="email_icon" /> {establishmentEmail}</p>
                    <p><b>Max Guests:</b> {maxGuests}</p>
                </div>
                <div className="col-md-4 column__estb text-center">
                    <p>Recommended <img src="https://img.icons8.com/nolan/44/good-quality.png" alt="recommended_icon" /></p>
                    <p className="underText__estb">1 night - 2 adults</p>
                    <h3>$ {price}</h3>
                    <hr className="hr-main" />
                    <p className="underText__estb">Including taxes & fees</p>
                    <br />
                    <Link to={`/hotel-specific/${id}`} className="btn-establishments">More details</Link>
                </div>
            </div>
            <br />
            <hr className="hr__estb" />
            <br />
        </>
    )
}

export default Hotels;