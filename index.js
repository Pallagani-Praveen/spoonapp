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

  // ultility function
  // const removeDoc = id =>{
  //   const li = document.querySelector('[data-id="'+id+'"]');
  //   const ul = document.querySelector('.list-spoons');
  //   ul.removeChild(li);
  //
  // }

function renderSpoon(doc){
    const ul = document.querySelector('.list-spoons');
    const li = document.createElement('li');
    const name = document.createElement('span');
    const city = document.createElement('span');
    const br = document.createElement('br');
    const cross = document.createElement('div');
    cross.textContent = 'X';
    cross.setAttribute('class','cross');
    li.setAttribute('data-id',doc.id);
    name.textContent = 'Name : '+doc.data().name;
    city.textContent = 'Body : '+doc.data().body;
    li.appendChild(name);
    li.appendChild(cross);
    li.appendChild(br);
    li.appendChild(city);
    ul.appendChild(li);

    cross.addEventListener('click',(e)=>{
      let id = e.target.parentElement.getAttribute('data-id');
      spnRef.doc(id).delete().then((err)=>{
        if(err){
          console.log(`error : ${err}`);
        }
        else{
          // removeDoc(id); // this function will update the page only after the recored deleted in db
          console.log('record deleted successfully');
        }
      });
    });
}

  // not a real time data getting function
  // spnRef.get().then((snapShot)=>{
  //     snapShot.docs.forEach((doc)=>{
  //       renderSpoon(doc);
  //     });
  // });

  // real time data getting function
  spnRef.onSnapshot(snapShot=>{
    const changes = snapShot.docChanges();
    changes.forEach((change) => {
      if(change.type==='added'){
      renderSpoon(change.doc);
      }
      else if(change.type==='removed'){
        const li = document.querySelector('[data-id="'+change.doc.id+'"]');
        const ul = document.querySelector('.list-spoons');
        ul.removeChild(li);
       // this function gives immidiate update on the page
      }

    });

  });




  const saveButton = document.querySelector('.form button');
  saveButton.addEventListener('click',(e)=>{
    var name = document.querySelector('.form input[name="name"]');
    var body = document.querySelector('.form input[name="body"]');
    e.preventDefault();
    spnRef.add({
      name:name.value,
      body:body.value
    });
    name.value = '';
    body.value = '';

  });
