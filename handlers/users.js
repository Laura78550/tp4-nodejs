const express = require('express');
const router = express.Router();

router.get(
  '',
  async function getUsers(req,res){
    res.json({message : "All users" });
  }
);

router.get(
  '/:id',
  async function getUser(req,res){
    res.json({message : `User id ${req.params.id}` });
  }
);

router.post(
  '',
  async function createUser(req,res){
    res.json({message : "Create user" });
  }
);

router.delete(
  '/:id',
  async function deleteUser(req,res){
    res.json({message : `Delete user id ${req.params.id}` });
  }
);


module.exports = router;
