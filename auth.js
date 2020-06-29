let signupForm = document.querySelector('#signup-form');
let loginForm = document.querySelector('#login-form');
let logout = document.querySelector('#logout');


signupForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  let email = signupForm['email'].value;
  let pwd = signupForm['pwd'].value;
  auth.createUserWithEmailAndPassword(email, pwd).then(cred=>{
    console.log(cred.user.email);
  });
});


loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let email = loginForm['email'].value;
  let pwd = loginForm['pwd'].value;
  auth.signInWithEmailAndPassword(email,pwd).then(cred=>{
    console.log(cred.user.email);
  });

});


logout.addEventListener('click',(e)=>{
  e.preventDefault();

  auth.signOut().then(()=>{
    console.log('logged out success fully');
  });
});
