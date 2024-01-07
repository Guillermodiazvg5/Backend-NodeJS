const pool = require ("../database")

const mercadopago = require("mercadopago")

const {allProducts} = require('../routes/products.routes.js')



const getAllProducts = async (req, res, next) => {

    try{

          // res.send("Leyendo productos y datos");
  
          const allProductsNuts =  await pool.query('select * from nuts')

          console.log(allProductsNuts)

          res.json(allProductsNuts.rows)


    }catch(error){

        next(error)


    }

  

}

const getProducts = async(req,res,next) => {

    try{

      //  throw new Error('Ocurrio un error fue mal ')

    const {id} = req.params 

   const productsUnit = await pool.query('select * from nuts where id = $1 ' , [id])

   if(productsUnit.rows.length === 0)
       res.status(404).json({
      message: " Producto no econtrado ",
    
    })


      res.json(productsUnit.rows[0]);

    }catch(error){
        
        next(error);



    }

    

     
};


const postProducts = async (req, res, next) => {
    const product = req.body

    console.log('f1')


    console.log(product)
    res.send("Creando productos S");
  }




  const deleteProducts = async (req, res, next) => {
    res.send("Eliminando productos");
  }



  const putProducts = async (req, res, next) => {
    res.send("Actualizando productos");
  }











 const CreateOrder = async (req,res) => {
    const result = await  mercadopago.configure({

       access_token: "TEST-5774235803669517-010610-3ff3a01b35a6d1ac23788f96b134270e-1622920706",
    });

    mercadopago.preferences.create({
      items:[
         {
              title:'portatil',
              quantity: 1,
              currency_id: 'COP',
              unit_price: 500000,
              description:"Una computadora"
             }          
      ]
    });



   

    res.send("creando orden ");
    console.log(result)

 };






  module.exports = {

    getAllProducts,
    getProducts,
    postProducts,
    deleteProducts,
    putProducts,

    CreateOrder


  }