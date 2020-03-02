import axios from 'axios';

export default class CurdApi {

  static postPhoto(selectedFile, replacePhoto) {
    if (selectedFile) {
      let serverResponse;
      let formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("path", replacePhoto);
      axios.post('http://localhost:8080/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log('res:' + res)
          //setMessageFromServer(res.data)
          serverResponse = res.data;
        })
        .catch((error) => {
          // handle this error
          console.log('error: ' + error);
          //setMessageFromServer(error.data)
          serverResponse = error.data;
        })
      return serverResponse;
    }
  }

  static postData(data, selectedCity, setMessageFromServer) {
    let profile = {
      displayName: data.displayName,
      realName: data.realName,
      birthDate: data.birthDate,
      height: data.height,
      cityLocation: selectedCity,
      occupation: data.occupation,
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
      }).catch((error) => {
        // handle this error
        setMessageFromServer(error.data)
      })
  }

  static async getAllProfiles() {
    try {
      const response = await fetch(`http://localhost:8080/all/profile`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return error.data;
    }
  }

  static getPhoto() {
    // return photo;
  }

  static getData() {
    // return data;
  }
}