import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import {  getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Sing_Up from './Componets/Sing_Up/Sing_Up';
import Sing_in from './Componets/Sing-in/Sing_in';

function App() {
  const auth = getAuth();
  const [datas, setData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Login");
        setData(user);
      } else {
        console.log("LogOut");
        setData(null);
      }
    });
  }, []);

  if (datas === null) {
    return (
      <div>
        <Sing_Up></Sing_Up>
        <Sing_in></Sing_in>
        
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>Hello {datas.email}</h1>
        <button onClick={()=> signOut(auth)}>LogOut</button>
      </div>
    </>
  );
}

export default App;
