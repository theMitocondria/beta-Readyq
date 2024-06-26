import React from 'react'
import "regenerator-runtime";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import appStore from './Redux/appStore.js';
// import regeneratorRuntime from "regenerator-runtime";

import {Provider} from 'react-redux';
import { SparklesCore } from './components/ui/sparkles.tsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store = {appStore}>
  
        <>
        
        <App />
        </>
  </Provider>
  
)
