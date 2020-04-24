'use strict';
const passport = require('passport');
const auth     = require('../models/user');
const userController = require('../controllers/user');
const mysql      = require('mysql');
const config = require('../config/mysql');
const register = (router) => {
    // router.all('/*', (req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', "*");
    //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //     res.header('Access-Control-Allow-Headers', 'Content-Type');
    //     next();
    //   });

    router.post('/login', (req, res, next) => {

        passport.authenticate('local', (err, user) => {
            console.log(err);
            if (err) {return res.status(403).json({err: err, authUser: user}); }
            if (!user) { return res.status(403).json({err: err, authUser: user}); }
            req.logIn(user, (err) => {
                if (err) { return res.status(403).json({err: err, authUser: user}); }
                res.status(200).json({err: null, authUser: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    fullname: user.fullname,
                    created_at: user.created_at,
                    modified_at: user.modified_at
                }});
            });
        })(req, res, next);
    });


    router.get('/logout', (req, res) =>{
        req.session.destroy()
        req.logout();
        res.status(200).json({err: null, authUser: {}})
    });

    router.get('/signup:email:password:username:fullname',(req, res) => {
        let email = req.params.email;
        let password = req.params.password;
        let username = req.params.username;
        let fullname = req.params.fullname;
        console.log(email);
        passport.authenticate('local', (err, user) => {
            console.log(err);
            if (err) {return res.status(403).json({err: err, authUser: user}); }
            if (!user) { return res.status(403).json({err: err, authUser: user}); }
 
            let data = {    email: req.body.email, 
                            password: req.body.password, 
                            username: req.body.username, 
                            fullname: req.body.fullname
                        };

            let sql = "INSERT INTO users SET ?";
            let connection = mysql.createConnection(config.configDB);
            connection.query(sql, data,(err, results)  =>{
                if (error) throw error;
                console.log('Insert done');
                res.send('aaa')
            });
            // let query = connection.query(sql, data,(err, results) => {
            //   if(err) throw err;
            //   res.redirect('/register');
            // });
        })(req, res, next);

        
      });

}


module.exports = register;
