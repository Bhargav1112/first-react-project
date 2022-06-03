import React, { useState } from 'react';
import FamousPlace from './FamousPlace'

function CountryFun(props) {

    const [countryName, setCountryName] = useState('INDIA')
    const changeCountryHandler = () => {
        setCountryName('USA')
    }

    const indiaPlaces = ['Tajmahal', 'Red-fort'];
    const usPlaces = ['WhiteHouse', 'ABCD', "1234"]

    return (
        <div>
            <h2>{countryName}</h2>
            <button type='button' onClick={changeCountryHandler} >Click to Change</button>
            <h2>Famous Places:</h2>
            <FamousPlace india={indiaPlaces} us={usPlaces} country={countryName} />
        </div>
    );
}

export default CountryFun;