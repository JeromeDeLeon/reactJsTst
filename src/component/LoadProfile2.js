import React, { Component } from 'react'
import axios from 'axios'
import {  Table } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

export class LoadProfile extends Component {

    state = {
      data: []
    }
    
    componentDidMount() {
        axios({
            url: 'http://localhost:8080//profile/all',
            method: 'GET',
            responseType: 'json',
          }).then((response) => {

            this.setState({data: response.data});

            response.data.forEach((d) => {
               console.log("d: "+d.displayName)
            });
            // this is fine
            this.state.data.forEach((e) => {
               console.log("e: "+e.displayName) 
            });
          });
    }
    
    render() {
        return (
          <Table fixedHeader={false} style={{ width: "auto", tableLayout: "auto" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{Width: '50px'}}>Id</Table.HeaderCell>
            <Table.HeaderCell>Fullname</Table.HeaderCell>
            <Table.HeaderCell>Birth Date</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Ethnicity</Table.HeaderCell>
            <Table.HeaderCell>Religion</Table.HeaderCell>
            <Table.HeaderCell>Height</Table.HeaderCell>
            <Table.HeaderCell>About Me</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Edit profile</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.data.map((el) => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>{el.displayName}</Table.Cell>
                <Table.Cell>{el.birthDate}</Table.Cell>
                <Table.Cell>{el.gender}</Table.Cell>
                <Table.Cell>{el.ethnicity}</Table.Cell>
                <Table.Cell>{el.religion}</Table.Cell>
                <Table.Cell>{el.height}</Table.Cell>
                <Table.Cell>{el.aboutMe}</Table.Cell>
                <Table.Cell>{el.cityLocation}</Table.Cell>
                <Table.Cell>link to click edit</Table.Cell>
              </Table.Row>
            );
          })
          }
        </Table.Body> 
      </Table>
           
        )
    }
}

export default LoadProfile
