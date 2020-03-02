import React, { Component } from 'react';

class SelectFigure extends Component {
    render() {
        return (
            <div>
                <select value={this.props.profile.figure} 
                name="figure" ref={this.props.form.register}
                onChange={(input) => 
                    this.props.setProfile({ ...this.props.profile, 
                        [input.target.name]: input.target.value })
                        }
                >
                    <option value="">Select...</option>
                    <option value="slim">Slim</option>
                    <option value="normal">Normal</option>
					<option value="athletic">Athletic</option>
					<option value="aFewExtraKilos">A few extra kilos</option>
					<option value="moreToLove">More to love</option>
					<option value="other">Other</option>
                </select>
            </div>
        )
    }
}

export default SelectFigure;
