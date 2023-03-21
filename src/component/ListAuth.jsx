// // npm install firebase

import React, { useEffect, useState } from "react";

import "./List.css";
import { Link } from "react-router-dom";

// import firebase from "firebase/app";
// import "firebase/database";
/*
De No funcionar import firebase from "firebase/app"
firebase/compat/app y firebase/compat/database, está importando las versiones compatibles 
de Firebase para su proyecto. Esto debería permitirle utilizar todas las funciones y 
características de Firebase sin problemas.

Probamos:
*/
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// // Initialize Firebase

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"; // para otras versiones puede funcionar
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCKvZu80RuBGWUhdYlP-tguUshRPACimM",
  authDomain: "form-build-6ec5d.firebaseapp.com",
  databaseURL: "https://form-build-6ec5d-default-rtdb.firebaseio.com",
  projectId: "form-build-6ec5d",
  storageBucket: "form-build-6ec5d.appspot.com",
  messagingSenderId: "776975788497",
  appId: "1:776975788497:web:601077de29c4dfd76798f0",
  measurementId: "G-ECZY5L5H67",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = firebase.database();

import { getAuth } from 'firebase/auth';

const ListAuth = () => {
  const [allForms, setallForms] = useState();

  

  const auth = getAuth();
  const user = auth.currentUser;
  var uid
  if (user) {
    uid = user.uid;
    console.log('UID del usuario actual:', uid);
  } else {
    console.log('No hay usuario autenticado');
  }
/*
NO FUNCIONA, falta authenticar el usuario y ver la config en firebase
*/
  useEffect(() => {
    const usersRef = database.ref(`users/${uid}`);
    usersRef
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();
        // console.log("data Auth: ", data);
        const result = Object.values(data);
        setallForms(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Link to="/">
        <button>Back to Form</button>
      </Link>
      <div className="list_container">
        {allForms &&
          allForms.map((user) => (
            <div className="card" key={user.id}>
              <div className="card_content">
                <h3>{user.full_name}</h3>
                <p>Email: {user.email}</p>
                <p>Country of origin: {user.country_of_origin}</p>
                <p>Birth date: {user.birth_date}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListAuth;


/*
Esta versión es para trabajar con mayor protección de nuestros datos en nuestra db 
en firebase realtime database

Donde en la Reglas (Rules) seteamos:

*/