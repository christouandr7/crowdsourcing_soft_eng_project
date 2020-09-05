var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());
User = require('../models/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var  VerifyToken = require('./VerifyToken');
const {deleteUser,getUsers,getUserById,updateUserfields}= require('../models/User');


function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).send("Error "+ code +" : " +message);
}

//delete User
router.delete('/:_id', VerifyToken, function(req, res) {
  async function dlUser() {
    try {
      const users = await deleteUser(req.params._id);
      if (users.n==0) {
        res.status(404).json({ "Error 404": "User not found" });
      }
		 	else {
				res.status(200).json({ "message": "OK" });
      }
    }
    catch(error){
      handleError(res, error.message, "Failed to get Users.");
    }
  }
  if (req.user.admin){
    dlUser();
  } else {
    res.status(403).send("Permission Denied.");
  }

});

//make user admin


//report User

//see UserS
router.get('/', VerifyToken, function(req,res){
  async function allUsers() {
    try {
      const users = await getUsers();
      if (Object.keys(users).length === 0){
  			res.status(404).send("Error 404 : Not Found");
  		}
  		else if(req.query.format=="json"||req.query.format== null){
  			res.status(200).json(users);
  		} else {
        res.status(400).send("Error 400 : Bad Request");
  		}
    }
    catch(error){
      handleError(res, error.message, "Failed to get Users.");
    }
  }
  if (req.user.admin){
    allUsers();
  } else {
    res.status(403).send("Permission Denied.");
  }
});

//user by id
router.get('/:_id',VerifyToken,function(req,res){
  async function specUser() {
    try {
      const users = await getUserById(req.params._id);
      if (Object.keys(users).length === 0){
  			res.status(404).send("Error 404 : Not Found");
  		}
  		else if(req.query.format=="json"||req.query.format== null){
  			res.status(200).json(users);
  		} else {
        res.status(400).send("Error 400 : Bad Request");
  		}
    }
    catch(error){
      handleError(res, error.message, "Failed to get Users.");
    }
  }

  if (req.user._id==req.params._id || req.user.admin){
    specUser();
  } else {
    res.status(403).send("Permission Denied.");
  };
});

router.patch('/:_id',VerifyToken,function(req,res){
	async function updateUrFields(){
		try{
			const user=await updateUserfields(req.params._id, req.body);
			if (Object.keys(user).length === 0){
				res.status(404).send("Error 404 : Not Found");
			}
      else if(req.query.format=="json"||req.query.format== null){
        res.status(200).json(user);
      } else {
        res.status(400).send("Error 400 : Bad Request");
      }
		}catch(err){
			handleError(res, err.message, "Failed to update User.");
		}
	}
  if (req.user._id==req.params._id || req.user.admin){
    updateUrFields();
  } else {
    res.status(403).send("Permission Denied.");
  }
});


module.exports = router;
