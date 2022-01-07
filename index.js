const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port,()=>{
  console.log(`Exemple app listening at http://localhost:${port}`);
})

app.get('/hello-world',async(req,res)=>{
  req.message = "Hello World !";
  res.json({message : req.message });
});

app.get('/message',async(req,res)=>{
  var response = req.query.message.lenght >=20 ?  "Bad Request" : req.query.message;
  if (response == "Bad Request"){
    res.status(400).json({message: "Not Found"});
  }else{
    res.send({message:req.query.message});
  }
});

app.post('/infos/headers',(req,res)=>{
  res.json(req.headers);
});

app.post('/',(req,res)=>{
    var birthDateString = req.body.birthdate;
    var today = new Date();
    var dateParts = birthDateString.split("/");
    var birthDate = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0]+1);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    var major =  age >= 18 ? true : false;

    if(major){
      res.json({message:`Welcome ${req.body.firstname}`});
    }else{
      res.status(403).json({message : "Forbidden"});
    }
});


app.get('/rick-roll',(req,res)=>{
  res.redirect("https://youtu.be/d0w4w9WgXc0");
});

app.delete('/custom-header',(req,res)=>{
  res.set({Message:"Hello World !"});
  res.send();
});
