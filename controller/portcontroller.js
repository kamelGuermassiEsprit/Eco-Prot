

var express = require('express');

var Bateau=require('../model/bateau')
var Emplacement=require('../model/emplacement')

//function ajout
   async function add(req, res, next) {
    try{
  
  const bateau = new Bateau(req.body)
  await bateau.save();
  res.status(200).send('good add')
  bateau.save(); 
    }
    catch(err){
      console.log(err);
    }
    }

//affichage
    async function show (req, res, next) {
      try {
        const data= await Bateau.find();
        res.json(data);
        
      } catch (error) {
        console.log(err);
        
      }
    
    };


//affichage par id
    async function showbyid(req, res, next) {
      try {
        const data= await Bateau.findById(req.params.id);
        res.json(data);
        
      } catch (error) {
        console.log(err);
        
      }
    
    };
    
//affichage par nom

    async function showbyname(req, res, next) {
      try {
        console.log(req.params.name)
        const data= await Bateau.findOne(req.params);
        res.json(data);
        
      } catch (error) {
        console.log(err);
        
      }
    
    };
    
    //
    async function update(req, res, next) {
      try {
        const data= await Bateau.findByIdAndUpdate(req.params.id,req.body);
        res.send("update");
        
      } catch (error) {
        console.log(err);
        
      }
    
    };
    
    //delete
    async function deletebyid(req, res, next) {
      try {
        const data= await Bateau.findByIdAndDelete(req.params.id,req.body);
        res.send("removed");
        
      } catch (error) {
        console.log(err);
        
      }
    
    };
    










//function ajout
async function addEmplacement(req, res, next) {
  try{

const emplacement = new Emplacement(req.body)
await emplacement.save();
res.status(200).send('good add')
emplacement.save(); 
  }
  catch(err){
    console.log(err);
  }
  }

//affichage
  async function showEmplacement (req, res, next) {
    try {
      const data= await emplacement.find();
      res.json(data);
      
    } catch (error) {
      console.log(err);
      
    }
  
  };


//affichage par id
  async function showbyidEmplacement(req, res, next) {
    try {
      const data= await emplacement.findById(req.params.id);
      res.json(data);
      
    } catch (error) {
      console.log(err);
      
    }
  
  };
  
//affichage par nom

  async function showbynameEmplacement(req, res, next) {
    try {
      console.log(req.params.name)
      const data= await emplacement.findOne(req.params);
      res.json(data);
      
    } catch (error) {
      console.log(err);
      
    }
  
  };
  
  //
  async function updateEmplacement(req, res, next) {
    try {
      const data= await emplacementBateau.findByIdAndUpdate(req.params.id,req.body);
      res.send("update");
      
    } catch (error) {
      console.log(err);
      
    }
  
  };
  
  //delete
  async function deletebyidEmplacement(req, res, next) {
    try {
      const data= await emplacementBateau.findByIdAndDelete(req.params.id,req.body);
      res.send("removed");
      
    } catch (error) {
      console.log(err);
      
    }
  
  };









  module.exports = { add,show,showbyid,showbyname,update,deletebyid,addEmplacement,showEmplacement,showbyidEmplacement,showbynameEmplacement,updateEmplacement,deletebyidEmplacement}; 
 