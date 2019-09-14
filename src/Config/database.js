//Conexion Firebase
/* import * as admin from 'firebase-admin'

const serviceAccount = require("../../testigoii-firebase-adminsdk-fzoh1-bf2d9c30e0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testigoii.firebaseio.com"
});

const db = admin.database(); 


export default db */

/* apiKey: "AIzaSyDR1M5RNY93THt2mWvZArUYLX-q4XRtwJc",
authDomain: "testigo-18a8c.firebaseapp.com",
databaseURL: "https://testigo-18a8c.firebaseio.com",
storageBucket: "testigo-18a8c.appspot.com" */

import firebase from 'firebase/app'
import 'firebase/database'

  var config = {
    apiKey: "AIzaSyDnkTtHwKr8xhz9dWhaf4p4B3crtz63k_0",
    authDomain: "testigoii.firebaseapp.com",
    databaseURL: "https://testigoii.firebaseio.com",
    projectId: "testigoii",
    storageBucket: "testigoii.appspot.com",
    messagingSenderId: "960918105160",
    appId: "1:960918105160:web:b1eef821d30b3696d27c7d"
  };
  firebase.initializeApp(config);


  var db = firebase.database();

  export default db;