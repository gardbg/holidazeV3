import React, { useState, useEffect } from 'react';

import HotelSpecificDumb from '../components/hotelSpecific';

import establishments from '../establishments.json';

export default function HotelSpecific(props) {
    const [specificHotel, SetspecificHotel] = useState([])
    useEffect(() => {
        let filteredArray = establishments.filter((value) => {
            return props.match.params.id === value.id
        })
        SetspecificHotel(filteredArray)
    }, [props])

    return (
        <>
            {
                specificHotel.map((data) => {
                    return (
                        <div className="container">
                            <HotelSpecificDumb key={data.id}
                                id={data.id}
                                establishmentName={data.establishmentName}
                                imageUrl={data.imageUrl}
                                description={data.description}
                                price={data.price}
                                maxGuests={data.maxGuests}
                                establishmentEmail={data.establishmentEmail}
                                googleLat={data.googleLat}
                                googleLong={data.googleLong}
                            />
                        </div>
                    )
                })
            }
        </>
    );
}