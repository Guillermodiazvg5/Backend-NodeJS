const express = require('express');

const { Router } = require("express");
const pool = require('../database')

const axios = require('axios')



const {getAllProducts , getProducts , postProducts , deleteProducts , putProducts,getFrontend,CreateOrder} = require('../controllers/products.controllers')

const router = Router();

/*
router.get("/now", async (req, res) => {
     const result = await pool.query('select now()')
     console.log(result)
     res.json(result.rows[0].now)
     
  });

  */


router.get("/products", getAllProducts );


router.get('/products/:id', getProducts)





router.post("/products", postProducts );


router.delete("/products", deleteProducts );


router.put("/products", putProducts);





// OPTENIEDO DATOS DEL FRONTEND


router.post('/my-endpoint', getFrontend); 






router.post('/create-order' ,  CreateOrder)

router.get('/success' , (req,res) => res.send('orden creada'))

router.get('/webhook' , (req,res) => res.send('webhook '))





module.exports = router  ;
