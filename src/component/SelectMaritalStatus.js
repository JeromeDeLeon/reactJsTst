import React, { Component } from 'react';

class SelectMaritalStatus extends Component {
	render() {
		return (
			<div>
				<select name="selectMaritalStatus" ref={this.props.form.register}>
					<option value="">Select...</option>
					<option value="single">Single</option>
					<option value="married">Married</option>
					<option value="widowed">Widowed</option>
					<option value="divorced">Divorced</option>
					<option value="separated">Separated</option>
					<option value="registeredPartnership">Registered partnership</option>
				</select>
			</div>
		)
	}
}

export default SelectMaritalStatus;
