import React, { Component } from 'react';
import axios from "axios"

class FileUploader extends Component {

    state = {
        selectFile: null
    };


    fileSelectHandler = event => {
        console.warn("file: " + event.target)
        console.log(event.target.files[0])
        this.setState({
            selectFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('file', this.state.selectFile);
        axios.post('http://localhost:8080/test', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('res:'+res)
        }).catch((error) => {
            // handle this error
            console.log('error: ' + error);
        })
    }

    render() {
        return (
            <div>
                <input type="file" name="file" onChange={this.fileSelectHandler}></input>
                <button onClick={this.fileUploadHandler} > upload</button>
            </div>

        );
    }
}

export default FileUploader;