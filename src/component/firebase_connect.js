// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCCKvZu80RuBGWUhdYlP-tguUshRPACimM",
// //   authDomain: "form-build-6ec5d.firebaseapp.com",
// //   projectId: "form-build-6ec5d",
// //   storageBucket: "form-build-6ec5d.appspot.com",
// //   messagingSenderId: "776975788497",
// //   appId: "1:776975788497:web:601077de29c4dfd76798f0",
// //   measurementId: "G-ECZY5L5H67"
// // };

// // // Initialize Firebase
// // export const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);


// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';



// export function getUid() {
//   return new Promise(resolve => {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         let uid = user.uid;
//         const database = firebase.database();
//         const ref = database.ref(`users/${uid}`);
//         ref.once('value', snapshot => {
//           const userData = snapshot.val();
//           console.log(`El UID del usuario autenticado es: ${uid}`);
//           console.log(`Los datos del usuario son:`, userData);
//           resolve(uid);
//         });
//       } else {
//         console.log('No hay usuario autenticado.');
//         resolve(null);
//       }
//     });
//   });
// }





