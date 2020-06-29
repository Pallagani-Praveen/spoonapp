var firebaseConfig = {
  apiKey: "AIzaSyAxWw3EsPlFXll9-esUnRTmK8G1OVg0pBA",
  authDomain: "fir-practice-5fbd0.firebaseapp.com",
  databaseURL: "https://fir-practice-5fbd0.firebaseio.com",
  projectId: "fir-practice-5fbd0",
  storageBucket: "fir-practice-5fbd0.appspot.com",
  messagingSenderId: "762095915000",
  appId: "1:762095915000:web:cbbee9edd54be3f4c0100d",
  measurementId: "G-P5KJ33KEB3"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();
let spnRef = db.collection('spoons');
let auth = firebase.auth();
