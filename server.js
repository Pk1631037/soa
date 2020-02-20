const express = require('express');
const bodyParser = require('body-parser');

var firebase = require("firebase-admin");




// create express app
const app = express();
var a;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
var admin = require("firebase-admin");


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'othednmwspijbu',
  host: 'ec2-52-73-247-67.compute-1.amazonaws.com',
  database: 'd792m7rlrtacju',
  password: '9438a113d1059a7fe4ee6687531109ebe088989ae644dea0eef0852e278d09b0',
  port: 5432,
  ssl:true

})
// const pgp = require('pg-promise')(/* initialization options */);
// const cn = {
//   user: 'othednmwspijbu',
//   host: 'ec2-52-73-247-67.compute-1.amazonaws.com',
//   database: 'd792m7rlrtacju',
//   password: '9438a113d1059a7fe4ee6687531109ebe088989ae644dea0eef0852e278d09b0',
//   port: 5432,
//   ssl:true
// };
// alternative:
// var cn = 'postgres://username:password@host:port/database';
//const db = pgp(cn); // database instance;
// select and return a single user name from id:



var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://soa-main.firebaseio.com"
});

// Working EMail API 100 / Mail per day
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey("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");
// const msg = {
//   to: 'ashwinlaptop8@gmail.com',
//   from: 'winash1998@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

// End Email

// Working SMS API Cost - 0.2, Remainig 1.97
// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//   apiKey: '23591244',
//   apiSecret: 'oQ50QDCAkFyAH83A',
// });

// const from = '919789426080';
// const to = '918754918843';
// const text = 'Hello how are u';

// nexmo.message.sendSms(from, to, text);

// end SMS API


// define a simple route
// app.post('/signup', (req, res) => {
//   //  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// console.log(req.body);
//     console.log("Serer is listening on port 3000");
//     res.send(req.body.mobile);
//     var name=req.body.name;
//     var email=req.body.user;
//     var password=req.body.pass;
//     var mobile=req.body.mobile;
//     console.log(mobile);
  
// var db = admin.database();
// var ref = db.ref("saving-data");
// admin.auth().createUser({
//   email: email,
//   emailVerified: false,
//   phoneNumber: mobile,
//   password: password,
//   displayName: name,
//   photoURL: 'http://www.example.com/12345678/photo.png',
//   disabled: false
// })
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log('Successfully created new user:', userRecord.uid);
//   })
//   .catch(function(error) {
//     console.log('Error creating new user:', error);
//   });
// ref.child("users").push({
//     email,});
// }).then((data)=>{

// //  console.log('k  );
//   //localStorage.setItem('uid',key);
//     //success callback
//     // this.setState({showAlert: true})
//     console.log('data ' , data)
// }).catch((error)=>{
//     //error callback
//     console.log('error ' , error)
// })


    // res.send(req.body.user_id);
// });
app.post('/fetch', (req, res) => {

console.log(req.body.country);
var country = req.body.country
// client.query("SELECT * FROM my_table WHERE my_varchar = $1", [userInput]);
  // "select * from pp_user_profile where email_id  = '"+req.query.email_id+"' and user_password= '"+req.query.password+"'";
  pool.query("SELECT title FROM food where cuisine = $1",[country])
.then(user => {
    console.log(user.rows);
    res.send(user.rows); // print user name;
})
.catch(error => {
    // console.log(error); // print the error;
});
  console.log(req.body);
  var prem;
  // pool.query('SELECT * FROM food ',(err,res) => {
  //   console.log(res);
  // })
  // pool.query('SELECT * FROM food ')
  // .then(user => {
  //     console.log(user); // print user name;
  // })
  // .catch(error => {
  //     // console.log(error); // print the error;
  // });
  // // res.send("working");
  // console.log("Serer is listening on port 3000");
  // var email=req.body.email;
  // var password=req.body.pass;
  // var db = admin.database();
  // var ref = db.ref("Food_data/");
  // ref.once("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   res.send(snapshot.val());
  //   // console.log(snapshot.val().child);
  // //   snapshot.forEach(function (child){
  // //     prem =  child.val().title;
  // //  console.log(child.val().title);
  // //  console.log('prempremprem',prem)
  // //  res.send(prem);
  // });
 
});
//   admin.auth().signIn(email, password)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log('Successfully fetched user data:', userRecord.toJSON());
//   })
//   .catch(function(error) {
//    console.log('Error fetching user data:', error);
// res.send(error.message);
//   });
// return res.status(200).send({apiResult: yourNewArrayName})

// res.send({prem});
// });

app.post('/title', (req, res) => {
  console.log(req.body);
  // res.send("working");
  console.log("Serer is listening on port 3000");
  var title=req.body.title;
  console.log(title);
  // var password=req.body.pass;
  var db = admin.database();
  var ref = db.ref("Food_data/");
  ref.once("value", function(snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (child){
  //  console.log(child.val().title);
     if(title==child.val().title){
      console.log(child.key);
console.log(child.val().instructions);
console.log(child.val().ingredients);
res.send(child.val());
     }
     else{
   
     }
      
  });
  // console.log(a);
});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});