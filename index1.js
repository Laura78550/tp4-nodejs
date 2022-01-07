const express = require('express');
const router = express.Router();

router.get('/hello-world',async(req,res)=>{
  res.json({message : "Hello World !" });
});

router.get('/message',async(req,res)=>{
  let response = req.query.message.lenght >=20 ?  "Bad Request" : req.query.message;
  if (response == "Bad Request"){
    res.status(400).json({message: "Not Found"});
  }else{
    res.send({message:req.query.message});
  }
});

router.post('/infos/headers',async(req,res)=>{
  res.json(req.headers);
});

router.post('/',async(req,res)=>{
    let birthDateString = req.body.birthdate;
    let today = new Date();
    let dateParts = birthDateString.split("/");
    let birthDate = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0]+1);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    let major =  age >= 18 ? true : false;

    if(major){
      res.json({message:`Welcome ${req.body.firstname}`});
    }else{
      res.status(403).json({message : "Forbidden"});
    }
});

router.get('/rick-roll',async(req,res)=>{
  res.redirect("https://youtu.be/d0w4w9WgXc0");
});

router.delete('/custom-header',async(req,res)=>{
  res.set({Message:"Hello World !"});
  res.send();
});

router.get('/params/:id/:key/:slug',async(req,res)=>{
  res.json({id:req.params.id,key:req.params.key,slug:req.params.slug});
});


module.exports = router;
