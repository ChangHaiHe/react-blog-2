import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
// import 'animate.css';

import mongoose from 'mongoose';


const db = new mongoose.Schema({
  name: ''
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
