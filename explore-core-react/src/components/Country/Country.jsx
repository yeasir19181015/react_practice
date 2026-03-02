import React, { useState } from 'react';
import '../Country/Country.css';

const Country = ({ country,  handleVisitedCountries }) => {
    const[visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "big country" : "small country"}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;