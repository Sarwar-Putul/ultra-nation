import React from 'react';

const Counrty = (props) => {
    const {name, capital, population, area, region, flag} = props.country;
    const flagStyle = {height: '60px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding:'10px'}
    const handleCountryAdded = props.handleCountryAdded;
    return (
        <div style={countryStyle}>
            <h4>This is  {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h4><small>Capital: {capital}</small></h4>
            <h4><small>Population:  {population}</small></h4>
            <h4><small>Area: {area}</small></h4>
            <h4><small>Area: {region}</small></h4>
            <button onClick={()=>handleCountryAdded(props.country)}>Country added</button>
        </div>
    );
};

export default Counrty;