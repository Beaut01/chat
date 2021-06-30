import React, { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom';

import firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

import { Header } from './components/Header'
import { Router } from './components/Router'

firebase.initializeApp({
  apiKey: "AIzaSyCVeKlfsdncE0XUbZCg-x-9S1k1Rrlcm-c",
  authDomain: "chat-e3361.firebaseapp.com",
  projectId: "chat-e3361",
  storageBucket: "chat-e3361.appspot.com",
  messagingSenderId: "895358264739",
  appId: "1:895358264739:web:b10a84bb3464fcde52e616"
})

const auth = firebase.auth()
const store = firebase.firestore()

export const Context = createContext(null)

function App() {
  return (
    <Context.Provider value={{
      firebase, 
      auth,
      store
    }}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
