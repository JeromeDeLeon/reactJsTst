import React, { Component } from 'react'
import cities from './cities'
import myJson from './cities.json';
import axios from 'axios'

const city = cities.city;

const myObjStr = JSON.stringify(cities.city);
var myJSON = JSON.stringify(cities);
var allCities = JSON.parse(JSON.stringify(cities));

export class LoadProfile extends Component {
    constructor(){
        super();
        this.state = {
            data: allCities
        }
    }

    
    
    componentDidMount() {
        axios({
            url: 'http://localhost:8080//profile/all',
            method: 'GET',
            responseType: 'json', // important
          }).then((response) => {
            //const url = window.URL.createObjectURL(new Blob([response.data]));
            //const link = document.createElement('a');
            //link.href = url;
            //link.setAttribute('download', 'file.pdf');
            //document.body.appendChild(link);
            //link.click();
            console.log(response.data);
          });

    }

    handleClick(e){
       // console.log(allCities);
       // console.log(typeof allCities)
       // console.log(allCities.lenght)
       //console.log(obj.city);
      //  const arr = []
      //  Object.keys(cities).forEach(city => arr.push({name: city, value: cities[city]}))
        //console.log(arr.length)
      //  let cityArray = [];

        const cities = [];
        const lats = [];
        const longs = [];
        myJson.cities.forEach((eaCity) => {
            cities.push(eaCity.city);
            lats.push(eaCity.lat);
            longs.push(eaCity.long);
        });

        console.log(cities.length)
        console.log(cities[3])
        

      

        // for(var key in allCities){
        //     console.log(key)
        // }

    }
    
    render() {
        return (
<div>
    <button onClick= {(e) => this.handleClick(e)}>click me</button>
    {/* <ul>
                {city.map(s => (<li>{s}</li>))}
            </ul> */}
          
</div>

        );
    }
}


export default LoadProfile;