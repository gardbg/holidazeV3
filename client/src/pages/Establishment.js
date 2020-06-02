import React, { useState, useEffect } from 'react';

import Hotels from '../components/establishment';

import establishments from '../establishments.json';

export default function Establishments() {
  // eslint-disable-next-line
  const [allEstablishments, setallEstablishments] = useState([])
  useEffect(() => {
    // establishments = establishments.pop();
    setallEstablishments(establishments)
  }, [])
  return (
    <>
      <header className="establishmentsPageHero">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">Establishments.</h1>
              <hr className="hr-header" />
              <br />
            </div>
          </div>
        </div>
      </header>
      <br />
      {
        allEstablishments.map((data) => {
          return (
            <div className="container">
              <Hotels key={data.id}
                id={data.id}
                establishmentName={data.establishmentName}
                imageUrl={data.imageUrl}
                description={data.description}
                price={data.price}
                maxGuests={data.maxGuests}
                establishmentEmail={data.establishmentEmail}
              />
            </div>
          )
        })
      }
    </>
  );
}