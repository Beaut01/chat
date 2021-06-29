import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

import { Header } from './components/Header'
import { Router } from './components/Router'

firebase.initializeApp({
  
})

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
