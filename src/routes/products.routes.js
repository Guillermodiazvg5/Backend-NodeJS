const { Router } = require("express");
const pool = require('../database')
const {getAllProducts , getProducts , postProducts , deleteProducts , putProducts} = require('../controllers/products.controllers')

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


module.exports = router;
