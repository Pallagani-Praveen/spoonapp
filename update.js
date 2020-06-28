let urlparams = new URLSearchParams(window.location.search);
let id = urlparams.get('id');
let submitBtn = document.querySelector('.form button');
let name = document.querySelector('.form input[name="name"]');
let body = document.querySelector('.form input[name="body"]');

let docRef = spnRef.get().then(docs=>{
  docs.forEach((doc) => {
    if(doc.id===id){
      name.value = doc.data().name;
      body.value = doc.data().body;
    }
  });

});

submitBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  spnRef.doc(id).update({
    name:name.value,
    body:body.value
  }).then((err)=>{
    if(err){
      console.log(`error : ${err}`);
    }
    else{

      window.location.replace("./index.html");

    }
  });
});
