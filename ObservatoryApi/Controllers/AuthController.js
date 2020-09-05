var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());
var User = require('../models/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var  VerifyToken = require('./VerifyToken');
const {addUser, findUser, addJWT,removeJWT}= require('../models/User');

function handleError(res, reason, message, code) {
	console.log("ERROR: " + reason);
	var errorc = reason.split(" ");
	errorc = errorc[0];
	console.log(errorc);
	if (errorc == "E11000") {
		code = 406;
	}
	res.status(code || 500).send("Error " + code + " : " + message);
}
//user registration

router.post('/register', function(req, res) {
  var userobj = {  username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    firstname: req.body.firstname,
    lastname:  req.body.lastname,
    date_of_birth: req.body.date_of_birth,
    gender:  req.body.gender,
    phone_num:  req.body.phone_num,
    admin: false,
    token: null
  };
  async function crUser() {
    try {
      const user = await addUser(userobj);
      var token = jwt.sign({ id: user._id }, config.secret, {expiresIn: '1d'});
      const jtoken = await addJWT(user._id,token);
      user.token=token;
      res.status(200).json(user);
    }
    catch(error){
      handleError(res, error.message, "There was a problem registering the user.");
    }
  }
  crUser();
});

//user confirm
router.get('/me', VerifyToken, function(req, res) {
    res.status(200).send(req.user);
});

//user login



router.post('/login', function(req, res) {
  async function fdUser(){
    try {
      const user = await findUser(req.body.username);
      if (!user)
        return res.status(404).send('No user found.');
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid)
        return res.status(401).send({ auth: false, token: null });
      var token = jwt.sign({ id: user._id }, config.secret, {expiresIn: '1d' });
      const jtoken = await addJWT(user._id,token);
      res.status(200).json({ token: token });
    }
    catch(error){
      handleError(res, error.message, "Error on the server.");
    }
  }
  fdUser();
});

router.post('/logout',VerifyToken, function(req, res) {
  async function loUser(){
    try {
      const jtoken = await removeJWT(req.user._id);
      res.status(200).json({ "message":"OK"});
    }
    catch(error){
      handleError(res, error.message, "Error on the server.");
    }
  }
  loUser();
});

module.exports = router;
