const pool = require ("../database")


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

  module.exports = {

    getAllProducts,
    getProducts,
    postProducts,
    deleteProducts,
    putProducts


  }