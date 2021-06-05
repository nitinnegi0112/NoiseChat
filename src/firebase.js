import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCzRtKE8cp-7Kat_YavJihwgkPxqElux0k",
    authDomain: "noisechat-e7ad7.firebaseapp.com",
    projectId: "noisechat-e7ad7",
    storageBucket: "noisechat-e7ad7.appspot.com",
    messagingSenderId: "850141689318",
    appId: "1:850141689318:web:6463cb9e82ca8e49939227",
  }).auth();
