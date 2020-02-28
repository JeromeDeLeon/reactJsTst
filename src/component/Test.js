import React, { Component } from 'react'
import history from './history'

export class Test extends Component {
    
    handleClick(e){
        history.push('/')

    }
    
    render() {
        return (
            <div>
                testing page
                <button onClick={(e) => this.handleClick(e)}>got back to app</button> 
            </div>
        )
    }
}

export default Test
