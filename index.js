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

  const db = firebase.firestore();
  const spnRef = db.collection('spoons');

function renderSpoon(doc){
    const ul = document.querySelector('.list-spoons');
    const li = document.createElement('li');
    const name = document.createElement('span');
    const city = document.createElement('span');
    const br = document.createElement('br');
    name.textContent = 'Name : '+doc.data().name;
    city.textContent = 'Body : '+doc.data().body;
    li.appendChild(name);
    li.appendChild(br);
    li.appendChild(city);
    ul.appendChild(li);
}

  spnRef.get().then((snapShot)=>{
      snapShot.docs.forEach((doc)=>{
        renderSpoon(doc);
      });
  });

  
