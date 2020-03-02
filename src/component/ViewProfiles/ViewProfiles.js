import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CurdApi from '../Utility/CurdApi'
import { Table } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


export class ViewProfiles extends Component {
    state = {
        profiles: []
    }

    async componentDidMount() {

        this.setState({ profiles: await CurdApi.getAllProfiles() }); 
    }

    render() {
        console.log("data: "+this.state.data)
        return (
            <div>
                {/* { this.state.data ?  <em>Loading...</em> : */}
                    <Table style={{ width: "auto", tableLayout: "auto" }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell style={{ Width: '50px' }}>Id</Table.HeaderCell>
                                <Table.HeaderCell>Display Name</Table.HeaderCell>
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
                            {this.state.profiles.map((profile) => {
                                return (
                                    <Table.Row key={profile.id}>
                                        <Table.Cell>{profile.id}</Table.Cell>
                                        <Table.Cell>{profile.displayName}</Table.Cell>
                                        <Table.Cell>{profile.birthDate}</Table.Cell>
                                        <Table.Cell>{profile.gender}</Table.Cell>
                                        <Table.Cell>{profile.ethnicity}</Table.Cell>
                                        <Table.Cell>{profile.religion}</Table.Cell>
                                        <Table.Cell>{profile.height}</Table.Cell>
                                        <Table.Cell>{profile.aboutMe}</Table.Cell>
                                        <Table.Cell>{profile.cityLocation}</Table.Cell>
                                        <Table.Cell><Link to={{
                                          pathname:  "/EditProfile",
                                          state: {
                                            title: "Edit Profile",
                                            profile : profile 
                                          }
                                          
                                        //   props: {
                                        //     profile : profile,
                                        //     title: "Edit Profile" 
                                        //   }
                                        //   state: {
                                        //     profile : profile,
                                        //     titel: "Edit Profile"
                                        //   }
                                          }} >Edit Profile</Link></Table.Cell>
                                        </Table.Row>
                                );
                            })
                            }
                        </Table.Body>
                    </Table>
                {/* } */}
            </div>
        )
    }
}

export default ViewProfiles
