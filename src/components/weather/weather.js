import React from 'react'

const Weather = (props) => {
    
    const {description, city, country, error, temperature}=props.weather
    return (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}</p>}
            {description && <p> {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather; 