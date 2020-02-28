import React, { Component } from 'react'
import myJson from './cities.json';

export class SelectCity extends Component {
    render() {
        var city;
        var value;
        return (
           
            <div>
            <select
              name="city"
              ref={this.props.form.register}
              value={this.state.selectedValue}
               onChange={(event) => {
                 this.setState({selectedValue: event.target.value});
               }}
            >
              <option value="">Select...</option>
              {
                myJson.cities.map((eaCity) => {
                    return (
                      <option
                        key={eaCity.city}
                        value={`${eaCity.city} ${eaCity.lat} ${eaCity.long}`}
                      >
                        {eaCity.city}
                      </option>
                    );
                })
              }
           </select>
       </div>
        )
    }
}

export default SelectCity
