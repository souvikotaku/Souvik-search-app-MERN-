const express = require("express");
const router = require("express").Router();




let Csvuser = require("../models/csv.model");

//get the csv
router.get("/", async (req, res) => {
  try {
    const csvusers = await Csvuser.find();
    res.json(csvusers);
  } catch (err) {
    res.json({ message: err });
  }
});

//search by name api (async/await)
router.get('/search/:name',async(req,res)=>{
    let regex = new RegExp(req.params.name,'i');
    try{
      const csvByName = await Csvuser.find({name:regex});
      res.json(csvByName);
    }catch(err){
      res.json({message:err});
    }
  })
 
//add csv

router.post('/add',async(req,res)=>{
   
    const newCsv = new Csvuser({
        name: req.body.name,
        number: req.body.number,
      });

      try{
        const savedCsv = await newCsv.save();
        res.json(savedCsv);
      }catch(err){
          res.json({message:err});
      }
})


module.exports = router;
