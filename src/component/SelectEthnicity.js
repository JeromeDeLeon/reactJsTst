import React, { Component } from 'react'

export class SelectEthnicity extends Component {
    render() {
        return (
                <select name="ethnicity" ref={this.props.form.register}>
                    <option value="">Select...</option>
                    <option value="white">White</option>
                    <option value="southAsian">South Asian</option>
                    <option value="southEastAsian">South East Asian</option>
                    <option value="mixed">Mixed</option>
                    <option value="black">Black</option>
                    <option value="arabic">Arabic</option>
                    <option value="hispanic">Hispanic</option>
                    <option value="latino">Latino</option>
                    <option value="nativeAmerican">Native American</option>
                    <option value="pacificIslander">Pacific Islander</option>
                    <option value="other">Other</option>
                </select>
        )
    }
}

export default SelectEthnicity
