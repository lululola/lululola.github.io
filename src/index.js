import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/App'
import "./css/reset.css";
import "./css/style.css";
import './css/responsive.css';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
   </Router>,
  document.getElementById("root")
);