import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA912Kh_hvztrEG8jiKKb_SH2snJcd0chA",
    authDomain: "game-4f7d3.firebaseapp.com",
    projectId: "game-4f7d3",
    storageBucket: "game-4f7d3.appspot.com",
    messagingSenderId: "36583917637",
    appId: "1:36583917637:web:da5d67c07e1408b181fb2c",
    measurementId: "G-NF6KWRK1MM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth= getAuth()

  //console.log(app);

  document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("passwords").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
});