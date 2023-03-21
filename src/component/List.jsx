import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { Link } from "react-router-dom";

const List = () => {
  const [allForms, setallForms] = useState();
  useEffect(() => {
    async function getDb() {
      const getDb = await axios.get(
        "https://form-build-6ec5d-default-rtdb.firebaseio.com/users.json"
      );
      const result = Object.values(getDb.data);
      setallForms(result);
    }
    getDb();
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

export default List;




/*
Para realizar peticiones desde tu componente List a la base de datos de Firebase Realtime Database 
con la configuración de reglas que has proporcionado, necesitarás seguir los siguientes pasos:

Inicializa la conexión a la base de datos de Firebase. Para ello, primero debes agregar la 
configuración de Firebase a tu proyecto y luego inicializar la conexión de la siguiente manera:

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  // Agrega aquí la configuración de tu proyecto de Firebase
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


Para traer todos los datos de la base de datos de Firebase Realtime Database, 
puedes utilizar el método once() en la referencia de la base de datos que deseas leer, 
sin especificar ningún argumento en la llamada al método.


javascript
Copy code
const usersRef = database.ref('users');

usersRef.once('value')
  .then((snapshot) => {
    const data = snapshot.val();
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });





  *** // Agrega aquí la configuración de tu proyecto de Firebase está en:
  Configuración de proyecto


  Si ya usas npm y un agrupador de módulos como Webpack o Rollup, puedes ejecutar el siguiente comando para instalar la versión más reciente del SDK (más información):

npm install firebase
Luego, inicializa Firebase y comienza a usar los SDK de los productos que quieres utilizar.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
  measurementId: "G-ECZY5L5H67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


Nota: Esta opción utiliza el SDK de JavaScript modular, que proporciona un tamaño reducido del SDK.
*/