import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import "./styles.css";
import App from './App';
//import FileUploader from './component/FileUploder'
//import Example from './component/Example'
import CreateProfile from './component/CreateProfile'
import { BrowserRouter as Router } from 'react-router-dom';
//import Upload from './component/Upload'
//import App from './component/PhotoPreviewUpload'
//import AutocompletePlaces from './component/AutocompletePlaces'
import LoadProfile from './component/LoadProfile'
import LoadProfile2 from './component/LoadProfile2'
import * as serviceWorker from './serviceWorker';

import history from './component/history'


// ReactDOM.render(    
//    <Router> 
//        <CreateProfile />
//    </Router>,
//    document.getElementById('root')
//    );

ReactDOM.render(<CreateProfile />, document.getElementById('root'));

