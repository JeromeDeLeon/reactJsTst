import React, { useState, useEffect, useReducer } from "react";
import { useForm } from 'react-hook-form';
import ErrorMessage from "./ErrroMessage";
import SelectEthnicity from './SelectEthnicity'
import SelectReligion from './SelectReligion'
import SelectFigure from './SelectFigure'
import citiesJson from './cities.json';
import CurdApi from '../Utility/CurdApi'
import "./ProfileForm.css";

function ProfileForm(props) {
  const form = useForm();
  const {
    register,
    handleSubmit,
    errors
  } = form;

  const [dateType, setDateType] = useState('text');
  const [selectedFile, setSelectedFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [messageFromServer, setMessageFromServer] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [title, setTitle] = useState('');
  const [displayName, setDisplayName] = useState('')
  //const [profile, dispatch] =  useReducer(reducer, profileInitSate)
  const [profile, setProfile] = useState({
    displayName: '',
    realName: '',
    birthDate: '',
    height: 0,
    cityLocation: '',
    occupation: '',
    aboutMe: '',
    gender: '',
    maritalStatus: '',
    ethnicity: '',
    religion: '',
    figure: ''
  });

  const profileInitSate = {
    displayName: '',
    realName: '',
    birthDate: '',
    height: 0,
    cityLocation: '',
    occupation: '',
    aboutMe: '',
    gender: '',
    maritalStatus: '',
    ethnicity: '',
    religion: '',
    figure: ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'displayName':
        return { ...state, displayName: action.value };

      case 'realName':
        return { ...state, realName: action.value };

      case 'birthDate':
        return { ...state, birthDate: action.value };

      case 'height':
        return { ...state, height: action.value };

      case 'cityLocation':
        return { ...state, cityLocation: action.value };

      case 'aboutMe':
        return { ...state, aboutMe: action.value };

      case 'gender':
        return { ...state, gender: action.value };

      case 'maritalStatus':
        return { ...state, maritalStatus: action.value };

      case 'ethnicity':
        return { ...state, ethnicity: action.value };

      case 'religion':
        return { ...state, religion: action.value };

      case 'figure':
        return { ...state, figure: action.value };
      default:
        return state;
    }
  }


  // const [profile, setProfile] = useState(
  //   {displayName: 

  //   }
  // );
  // image previewer 
  //    let imagePreview = null;


  const onSubmit = (data, e) => {
    //e.target.reset();
    //HTMLFormElement.reset();
    //reset()
    CurdApi.postPhoto(selectedFile, "");
    CurdApi.postData(data, selectedCity, setMessageFromServer);
    // clear city and img url
    setSelectedCity('');
    setImagePreviewUrl('');
    setImagePreview('');
    console.log('selectedCity'+selectedCity)
    console.log('setImagePreviewUrl'+imagePreviewUrl)
    console.log("imagePreview"+imagePreview)
  }

  const fileChangedHandler = event => {
    setSelectedFile(event.target.files[0]);
    let reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(event.target.files[0])
    // if (imagePreviewUrl) {
    //   setImagePreview( (<div>
    //     <br/> <img src={imagePreviewUrl} alt="icon" width="200" /> 
    //     </div>));
    // }

  }

  const disallowMarkupText = input => {
    const regex = /^[a-zA-Z0-9,\\. ä å ö A Å Ö ]*$/;
    if (regex.test(input.target.value)) {
      //setDisplayName(input.target.value)
      setProfile({ ...profile, [input.target.name]: input.target.value });
    } else {
      let lastChar = input.target.value.substr(input.target.value.length - 1);
      alert("Markup text is not allowed, please remove: " + lastChar);
    }
  }

  useEffect(() => {

    if (props.match.params.title) {
      setTitle(props.match.params.title);
    } else if (props.location.state.title) {
      setTitle(props.location.state.title);
    }

    if (props.location.state) {
      if (props.location.state.profile) {
        setProfile(props.location.state.profile)
        console.warn("profile: ", props.location.state.profile)
      }
    }
    // if(props.match.params.title){
    //   setTitle(props.match.params.title);
    // }else if(props.location.state.title){
    //   setTitle(props.location.state.title);
    // }
    // if(props.match.params.profile){
    //   setProfile(props.location.state.profile)
    // }

    // if(props.location.state.profile){
    //     dispatch({type: 'dispalyName', 
    //     value: props.location.state.profile.displayName})
    //     dispatch({type: 'realName', 
    //     value: props.location.state.profile.realName})
    //     dispatch({type: 'birthDate', 
    //     value: props.location.state.profile.birthDate})
    //     dispatch({type: 'height', 
    //     value: props.location.state.profile.height})
    //     dispatch({type: 'cityLocation', 
    //     value: props.location.state.profile.cityLocation})
    //     dispatch({type: 'occupation', 
    //     value: props.location.state.profile.occupation})
    //     dispatch({type: 'aboutMe', 
    //     value: props.location.state.profile.aboutMe})
    //     dispatch({type: 'gender', 
    //     value: props.location.state.profile.gender})
    //     dispatch({type: 'maritalStatus', 
    //     value: props.location.state.profile.maritalStatus})
    //     dispatch({type: 'ethnicity', 
    //     value: props.location.state.profile.ethnicity})
    //     dispatch({type: 'religion', 
    //     value: props.location.state.profile.religion})
    //     dispatch({type: 'figure', 
    //     value: props.location.state.profile.figure})
    // }

    if (imagePreviewUrl !== "") {
      const image = (
        <div>
          <br /> <img src={imagePreviewUrl} alt="icon" width="200" />
        </div>
      );
      setImagePreview(image);
    }

  }, [imagePreviewUrl]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >

      <h2><b>{title}</b></h2>

      <input value={profile.displayName}
        name="displayName" type="text"
        placeholder="Display Name"
        onChange={(input) => {disallowMarkupText(input)}}
        ref={register({ required: true })} />
      <ErrorMessage error={errors.displayName} />
      <br />
  
      <input value={profile.realName}
        name="realName" type="text"
        placeholder="Real Name"
        onChange={(input) => { disallowMarkupText(input) }}
        ref={register({ required: true })} />
      <ErrorMessage error={errors.realName} />
      <br />

      <input value={profile.birthDate} name="birthDate" 
      placeholder="Birth date" type={dateType}
      onChange={(input) => {setProfile({ ...profile, [input.target.name]: input.target.value })}}
      onFocus={() => setDateType("date")} onBlur={() => setDateType("text")}
      ref={register({ required: true })} />
      <ErrorMessage error={errors.birthDate} />
      <br />

      <input value={profile.height}
        name="height" placeholder="Height in centimetre"
        onChange={(input) => {setProfile({ ...profile, [input.target.name]: input.target.value })}}
        type="number" step="0.01" ref={register} />
      <br />

      <textarea value={profile.occupation == null? '':profile.occupation}
        name="occupation" placeholder="Your occupation"
        onChange={(input) => { disallowMarkupText(input) }}
        ref={register} />
      <br />

      <textarea  value={profile.aboutMe == null? '':profile.aboutMe}
        name="aboutMe" placeholder="Tell us about yourself in free words"
        onChange={(input) => { disallowMarkupText(input) }}
        ref={register} />

      <label>Gender: </label>
      <select value={profile.gender == null? '':profile.gender} 
      onChange={(input) => {setProfile({ ...profile, [input.target.name]: input.target.value })}}
      name="gender" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <ErrorMessage error={errors.gender} />

      <label> Currect city: </label>
      <select
        value={profile.cityLocation}
        name="cityLocation"
        ref={register({ required: true })}
        onChange={(event) => {
          setSelectedCity(event.target.value)
          setProfile({ ...profile, [event.target.name]: event.target.value })
        }}
      >
        <option value="">Select...</option>
        {
          citiesJson.cities.map((aCity) => {
            return (
              <option
                key={aCity.city}
                value={`${aCity.city}#${aCity.lat} ${aCity.lon}`}>
                {aCity.city}
              </option>
            );
          })
        }
      </select>
      <ErrorMessage error={errors.city} />

      <label>Marital Status: </label>
      <select value={profile.maritalStatus}
        onChange={(input) => {setProfile({ ...profile, [input.target.name]: input.target.value })}}
        name="maritalStatus" ref={register({ required: true })}>
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
      <SelectEthnicity profile={profile} setProfile={setProfile}  form={form} />

      <label>Religion: </label>
      <SelectReligion profile={profile} setProfile={setProfile} form={form} />

      <label>Figure: </label>
      <SelectFigure profile={profile} setProfile={setProfile} form={form} />

      <label>Profile picture: </label>
      <input className="Column" type="file" accept="image/*"
        onChange={(e) => { fileChangedHandler(e) }} />
      {imagePreview}


      <input type="submit" value="submit" />

      <h1>{messageFromServer}</h1>

    </form>

  );
}

export default ProfileForm;
