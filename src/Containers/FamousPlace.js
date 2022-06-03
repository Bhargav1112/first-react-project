import React from 'react';

function FamousPlace({ india, us, country }) {

    // let places = props.india.map((c, i) => <li key={i}>{c}</li>)
    // if (props.country === 'USA') {
    //     places = props.us.map((c, i) => <li key={i}>{c}</li>)
    // }

    return (
        <ul style={{ listStyle: 'none' }} >
            {/* {places} */}
            {country === 'INDIA' ? india.map((c, i) => <li key={i}>{c}</li>) : us.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
    );
}

export default FamousPlace;