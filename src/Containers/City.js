import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: 'Ahmedabad'
        }
    }

    changeCityHandler() {
        this.setState({
            cityName: 'Surat'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.cityName}</h1>
                <button type='button' onClick={() => this.changeCityHandler()} >change city name</button>
            </div>
        );
    }
}

export default City;