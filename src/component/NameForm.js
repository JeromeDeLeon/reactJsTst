import React, { Component } from 'react'

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            title: '',
            displayName: '',
            profile: {}
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.title });
    }

    handleChangeName(event) {
        this.setState({ displayName: event.target.displayName });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title);
        event.preventDefault();
    }

    componentDidMount() {
        if (this.props.match.params.title) {
            this.setState({ title: this.props.match.params.title });
        } else if (this.props.location.state.title) {
            this.setState({ title: this.props.match.params.title });
        }
        // if(props.match.params.profile){
        //   setProfile(props.location.state.profile)
        // }
        if (this.props.location.state) {
            if (this.props.location.state.profile) {
                this.setState({displayName : this.props.location.state.profile.displayName})
                this.setState({profile : this.props.location.state.profile}, function(){
                    console.log("profile.displayName up: "+this.state.profile.displayName);
                });
                console.warn("profile: ", this.props.location.state.profile)
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
            <input type="text" title={this.state.profile.realName} onChange={this.handleChangeTitle} />
                </label>
                <label>
                    displayName:
            <input type="text" title={this.state.profile.displayName} onChange={this.handleChangeName} />
                </label>
                <input type="submit" title="Submit" />
            </form>
        );
    }
}

export default NameForm;
