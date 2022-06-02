import { useState } from "react";

const CityFun = () => {

    const [cityName, setCityName] = useState('ABD')

    const changeCityHandler = () => {
        setCityName('Surat')
    }

    return (
        <div>
            <h1>{cityName}</h1>
            <button type='button' onClick={changeCityHandler} >change city name</button>
        </div>
    );
}

export default CityFun