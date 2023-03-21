import React, { useEffect, useState } from "react";

import "./List.css";
import { Link } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/database";

// npm install firebase

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const List = () => {
  const [allForms, setallForms] = useState();

  useEffect(() => {
    const usersRef = database.ref("users");
    usersRef
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();
        console.log("data Auth: ",data);
        setallForms(data);
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

export default List;
