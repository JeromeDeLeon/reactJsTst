import React, { Component } from 'react'
import './PhotoPreviewUpload.css'

class PhotoPreviewUpload extends Component {
    state =  {
      selectedFile: null,
      imagePreviewUrl: null
    };
   
    fileChangedHandler = event => {
      this.props.setSelectedFile(event.target.files[0]);
      this.setState({
        selectedFile: event.target.files[0]
      })
   
      let reader = new FileReader();
       
      reader.onloadend = () => {
        this.props.setImagePreviewUrl(reader.result);
        this.setState({
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(event.target.files[0])
    }

    resetState = () =>{
      this.setState({selectedFile: null})
      this.setState({imagePreviewUrl: null})
    }
   
    render() {
   
      let imagePreview = null;
      if (this.state.imagePreviewUrl) {
        imagePreview = (<div>
          <br/> <img src={this.state.imagePreviewUrl} alt="icon" width="200" /> 
          </div>);
      }
   
      return (
        <div className="Row">
           <input className="Column" type="file" accept="image/*" 
           onChange={this.fileChangedHandler} />
           {/* { imagePreview } */}
        </div>
      );
    }
  }
   
  export default PhotoPreviewUpload
;
