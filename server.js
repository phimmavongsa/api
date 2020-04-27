const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
const session = require('express-session');
// const { matchedData } = require("express-validator")
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const env = require('dotenv').config();
const app = express();


const uri = process.env.URL_MONGODB;
const dbName = process.env.DATABASENAME_MONGDB;
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
let information = {};
let callbackData = { authenticated:false };

app.use( cors({ 
    origin: ['http://localhost:3000'], 
    methods: ['GET', 'POST','PUT','DELETE'], 
    credentials: true 
}));
// app.use(cors());
app.use('/api', bodyParser.urlencoded({ extended: false }), router);
app.use('/api', bodyParser.json(), router);
app.use( session({
    secret: process.env.SESSION_SECRET,
    key: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
}));


(async () => {
    try {
      await client.connect();
      console.log("Connected correctly to database server");
      const db = client.db(dbName);
      const col0 = db.collection('users');
      const col1 = db.collection('session');
      const col2 = db.collection('img_cover');
      const col3 = db.collection('post');

      information.users = await col0.find({}).toArray();   //Users
      information.session = await col1.find({}).toArray();   //Session
      information.coverpage = await col2.find({}).toArray();   //Cover Pages
      information.post = await col3.find({}).toArray();   //All Post

      console.log('Query All Data from database success!!!');
  
      // Close connection
    //   client.close();
    } catch(err) {
      console.log(err.stack);
    }
  })();

router.route('/auth')
    .get((req,res) => {
         (async () => {
            try {
              const db = client.db(dbName);
              const col = db.collection('users');
              information.users= await col.find({}).toArray();   //All Post
              console.log('Query New! Users from database success!!!');
            } catch(err) {
              console.log(err.stack);
            }
          })();
              
        res.json(callbackData)
    })

    .post((req,res) => {
    let user = {};
    user.username = req.query.username;
    user.password = req.query.password;
    console.log('Checked User :', user.username);
    let LoopCheck = true;
    for(let i in information.users){
        if(LoopCheck) {
            if( user.username == information.users[i].username && 
                user.password == information.users[i].password ){ 
                callbackData.userid = information.users[i].userid;
                callbackData.username = information.users[i].username;
                callbackData.permission = information.users[i].permission;
                callbackData.authenticated = true;
                LoopCheck = false;
                console.log(' User :', user.username, 'Authen Pass!!!');
            }else{
                callbackData.userid = null;
                callbackData.username = null;
                callbackData.permission = null;
                callbackData.authenticated = false;
            }
        }    
    }
    console.log(callbackData)
    res.json(callbackData);

})

router.route('/users')
    .get((req,res) => {
        information.users && information.users.length != 0 ? res.json(information.users):res.json({message:'Data Not Found'});
        res.end();
    })

router.route('/session')
    .get((req,res) => {
        session.loggedin == true ? res.json({username:'Nat', message:'true'}):res.json({username:'null', message:'false'});
        // information[1] && information[1].length != 0  ? res.json(information[1]):res.json({message:'Data Not Found'});
        res.end();
    })

router.route('/cover_pages')
    .get((req,res) => {
        information.coverpage && information.coverpage.length != 0 ? res.json(information.coverpage):res.json({message:'NotFound'});
        res.end();
    });

router.route('/posts')
    .get((req,res) => {
        (async () => {
            try {
            //   await client.connect();
              const db = client.db(dbName);
              const col = db.collection('post');
              information.post = await col.find({}).toArray();   //All Post
              console.log('Query New! Post from database success!!!');
              // Close connection
            //   client.close();
            } catch(err) {
              console.log(err.stack);
            }
          })();
        information.post && information.post.length != 0 ? res.json(information.post):res.json({message:'Data Not Found'});
        res.end();
    });

app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!!!')
})

app.listen(process.env.PORT , () => {
    console.log(`Starting api server at http://localhost:${process.env.PORT}`)
});