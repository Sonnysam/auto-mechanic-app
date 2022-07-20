import * as firebase from "firebase";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnlcMYbLGhIqCrNrhbRrd_geG_N8Ang2M",
  authDomain: "craftman-auto-app-921a9.firebaseapp.com",
  projectId: "craftman-auto-app-921a9",
  storageBucket: "craftman-auto-app-921a9.appspot.com",
  messagingSenderId: "322129608668",
  appId: "1:322129608668:web:df3ade31df98c896391919",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };
