  // ultility function
  // const removeDoc = id =>{
  //   const li = document.querySelector('[data-id="'+id+'"]');
  //   const ul = document.querySelector('.list-spoons');
  //   ul.removeChild(li);
  //
  // }

function renderSpoon(doc){
    let ul = document.querySelector('.list-spoons');
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let br = document.createElement('br');
    let cross = document.createElement('div');

    const update = document.createElement('a');
    update.textContent = 'update';

    cross.textContent = 'X';
    cross.setAttribute('class','cross');
    li.setAttribute('data-id',doc.id);
    name.textContent = 'Name : '+doc.data().name;
    city.textContent = 'Body : '+doc.data().body;
    li.appendChild(name);
    li.appendChild(cross);
    li.appendChild(update);
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

    update.addEventListener('click',(e)=>{
      e.target.setAttribute('href','./update.html?id='+doc.id);
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
    let changes = snapShot.docChanges();
    changes.forEach((change) => {
      if(change.type==='added'){
      renderSpoon(change.doc);
      }
      else if(change.type==='removed'){
        let li = document.querySelector('[data-id="'+change.doc.id+'"]');
        let ul = document.querySelector('.list-spoons');
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
