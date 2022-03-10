import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context';


ReactDOM.render(

  <Router>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>

  </Router>,


  document.getElementById('root')
)


