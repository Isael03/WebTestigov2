//Conexion Firebase


import firebase from 'firebase/app'
import 'firebase/database'
/**BD de pruebas */
  /* var config = {
    apiKey: "AIzaSyDnkTtHwKr8xhz9dWhaf4p4B3crtz63k_0",
    authDomain: "testigoii.firebaseapp.com",
    databaseURL: "https://testigoii.firebaseio.com",
    projectId: "testigoii",
    storageBucket: "testigoii.appspot.com",
    messagingSenderId: "960918105160",
    appId: "1:960918105160:web:b1eef821d30b3696d27c7d"
  }; */
/**BD oficial */
   const config = /*{
    apiKey: "AIzaSyDR1M5RNY93THt2mWvZArUYLX-q4XRtwJc",
    authDomain: "testigo-18a8c.firebaseapp.com",
    databaseURL: "https://testigo-18a8c.firebaseio.com",
    projectId: "testigo-18a8c",
    storageBucket: "testigo-18a8c.appspot.com",
    messagingSenderId: "652448395046",
    appId: "1:652448395046:web:742327bbf04297c9"
  }; */
  
  firebase.initializeApp(config);


  var db = firebase.database();

  export default db;
