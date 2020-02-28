import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import ErrorMessage from "./ErrroMessage";
import SelectEthnicity from './SelectEthnicity'
import SelectReligion from './SelectReligion'
import SelectFigure from './SelectFigure'
import citiesJson from './cities.json';
import axios from "axios"
import ViewProfile from './ViewProfile'
import history from './history'
import "./profileStyle.css";

function CreateProfile() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = form;

  const [dateType, setDateType] = useState('text');
  const [selectedFile, setSelectedFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [messageFromServer, setMessageFromServer] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  


  const onSubmit = (data, e) => {
    e.target.reset(); 
    let formData = new FormData();
    if(selectedFile ){
      formData.append("file", selectedFile);
      formData.append("path", "odoo3-2020-02-27 10:25:37.26.jpg");
      axios.post('http://localhost:8080/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log('res:' + res)
          setMessageFromServer(res.data)
        }).catch((error) => {
          // handle this error
          console.log('error: ' + error);
          setMessageFromServer(error.data)
        })
        setSelectedFile('')
    }

    let profile = {
      displayName: data.displayName,
      realName: data.realName,
      birthDate: data.birthDate,
      height: data.height,
      cityLocation: selectedCity,
      occupation: data.occupatioViewProfilen,
      aboutMe: data.aboutMe,
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      ethnicity: data.ethnicity,
      religion: data.religion,
      figure: data.figure
    }
    axios.post('http://localhost:8080/profile', profile)
      .then(res => {
        setMessageFromServer(res.data)
        console.log('res.data:' + res.data)
        //  history.push('/ViewProfile')
      }).catch((error) => {
        // handle this error
        setMessageFromServer(error.data)
        console.log('error: ' + error);
      })
      setSelectedCity('');
      setImagePreviewUrl('');
  }

  const fileChangedHandler = event => {
    console.log("call fileChangedHandler. "+event)
    setSelectedFile(event.target.files[0]);
    let reader = new FileReader();
    reader.onloadend = () => {
    setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(event.target.files[0])
  }

 let imagePreview = null;
  if (imagePreviewUrl) {
    imagePreview = (<div>
      <br/> <img src={imagePreviewUrl} alt="icon" width="200" /> 
      </div>);
  }

  const disallowMarkup = input => {
      const regex = /^[a-zA-Z0-9,\. ä å ö A Å Ö ]*$/;
      if (regex.test(input.target.value)) {
        input.preventDefault();
      }else{
        let lastChar = input.target.value.substr(input.target.value.length - 1);
        alert("Markup text is not allowed, please remove: "+lastChar);
      }
  }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} >

      <h2><b>Create profile</b></h2>

      <input name="displayName" type="text" 
      placeholder="Display Name" 
      onChange={(input) => {disallowMarkup(input)}}
      ref={register({ required: true })} />
      <ErrorMessage error={errors.displayName} />
      <br />
      <input name="realName" type="text" 
      placeholder="Real Name"
      onChange={(input) => {disallowMarkup(input)}} 
      ref={register({ required: true })} />
      <ErrorMessage error={errors.realName} />
      <br />

      <input name="birthDate" placeholder="Birth date" type={dateType}
        onFocus={() => setDateType("date")} onBlur={() => setDateType("text")}
        ref={register({ required: true })} />
      <ErrorMessage error={errors.birthDate} />
      <br />
      <input name="height" placeholder="Height in centimetre" 
      type="number" step="0.01" ref={register} />
      <br />
      
      <textarea name="occupation" placeholder="Your occupation" 
      onChange={(input) => {disallowMarkup(input)}}
      ref={register} />
      <br/>
      
      <textarea name="aboutMe" placeholder="Tell us about yourself in free words" 
      onChange={(input) => {disallowMarkup(input)}}
      ref={register} />

      <label>Gender: </label>
      <select name="gender" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <ErrorMessage error={errors.gender} />
      
      <label> Currect city: </label>
      <select
        name="city"
        ref={register({ required: true })}
        value={selectedCity}
        onChange={(event) => {
          setSelectedCity(event.target.value)
        }}
      >
        <option value="">Select...</option>
        {
          citiesJson.cities.map((eaCity) => {
            return (
              <option
                key={eaCity.city}
                value={`${eaCity.city}#${eaCity.lat} ${eaCity.lon}`}>
                {eaCity.city}
              </option>
            );
          })
        }
      </select>
      <ErrorMessage error={errors.city}/>

      <label>Marital Status: </label>
      <select name="maritalStatus" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="neverMarried">Never Married</option>
        <option value="divorced">Divorced</option>
        <option value="married">Married</option>
        <option value="separated">Separated</option>
        <option value="widowed">Widowed</option>
        <option value="registeredPartnership">Registered partnership</option>
      </select>
      <ErrorMessage error={errors.maritalStatus} />

      <label >Ethnicity: </label>
      <SelectEthnicity form={form} />

      <label>Religion: </label>
      <SelectReligion form={form} />

      <label>Figure: </label>
      <SelectFigure form={form} />

      <label>Profile picture: </label>
      <input className="Column" type="file" accept="image/*" 
           onChange={(e) => {fileChangedHandler(e)}} />
      { imagePreview }
      <br/>
      <input disabled={isSubmitting} type="submit" />

      {/* <button onClick={() => console.log("messageFromServer: " + messageFromServer)}>test me</button> */}

    </form>

  );
}


export default CreateProfile;
