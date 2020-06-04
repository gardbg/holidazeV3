import React, { useState, useEffect } from 'react';

import TypeHead from '../components/typehead';

import establishments from '../establishments.json';

export default function Home() {
  const [searchHotel, setsearchHotel] = useState(undefined);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isResultsFiltered, setIsResultsFiltered] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    setsearchHotel(establishments)
  }, [])

  const handleFiltering = (input) => {
    let filteredHotels = searchHotel.filter((value) => {
      return value.establishmentName.toLowerCase().includes((input.target.value).toLowerCase())
    })
    if(input.target.value === '') filteredHotels = [];
    setFilteredResults(filteredHotels)
    setSearchPhrase(input.target.value)
    setIsResultsFiltered(true)
  }

  return (
    <>
      <header className="mainPageHero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12 column__holidaze-frontpage">
              <br />
              <br />
              <h1 className="text-uppercase text-white font-weight-bold">Holidaze.</h1>
              <br />
              <h1 className="text-uppercase text-white font-weight-bold">In The Heart Of Bergen</h1>
              <hr className="hr-header" />
              <br />
            </div>
          </div>
          <br />
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <form className="Searchbar">
                <input type='text'
                  onChange={handleFiltering}
                  className='form-control input-Searchbar'
                  placeholder={'Rest Easy... ' + searchPhrase}
                />
              </form>
              <div className="row-searchbar">
                {
                  (isResultsFiltered) &&
                  <>
                    {
                      (filteredResults.length > 0) ?
                        filteredResults.map((value, index) => {
                          return <TypeHead key={index}
                            id={value.id}
                            establishmentName={value.establishmentName}
                          />
                        }) :
                        <div className="text-white">No Results</div>
                    }
                  </>
                  }
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}