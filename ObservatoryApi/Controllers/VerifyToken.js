var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../models/User');
const {getUserById}= require('../models/User');

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).send("Error "+ code +" : " +message);
}

function verifyToken(req, res, next) {
  var token = req.headers['x-observatory-auth'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    async function verifyUser() {
      try {
        const user = await getUserById(decoded.id);
        if (!user)
          return res.status(404).send("No user found.");
        req.user=user;
        if(token===user.token){
          next();
        } else {
          return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
      }
      catch(error){
        handleError(res, error.message, "There was a problem finding the user.");
      }
    }
    verifyUser();
  });
}

module.exports = verifyToken;
