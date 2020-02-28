import React, { Component } from 'react';

class SelectReligion extends Component {
    render() {
        return (
                <select name="religion" ref={this.props.form.register}>
                    <option value="">Select...</option>
                    <option value="agnostic">Agnostic</option>
		            <option value="atheist">Atheist</option>
		            <option value="buddhist">Buddhist</option>
	                <option value="christian">Christian</option>
		            <option value="hindu">Hindu</option>
		            <option value="islam">Islam</option>
		            <option value="jewish">Jewish</option>
		            <option value="shinto">Shinto</option>
		            <option value="sikh">Sikh</option>
		            <option value="other">Other</option>
                </select>
        )
    }
}

export default SelectReligion;
