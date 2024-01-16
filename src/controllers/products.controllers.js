const pool = require("../database");

const mercadopago = require("mercadopago");

const dotenv = require("dotenv");
dotenv.config();

const getAllProducts = async (req, res, next) => {
  try {
    // res.send("Leyendo productos y datos");

    const allProductsNuts = await pool.query("select * from nuts2");

    console.log(allProductsNuts);

    res.json(allProductsNuts.rows);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    //  throw new Error('Ocurrio un error fue mal ')

    const { id } = req.params;

    const productsUnit = await pool.query("select * from nuts2 where id = $1 ", [
      id,
    ]);

    if (productsUnit.rows.length === 0)
      res.status(404).json({
        message: " Producto no econtrado ",
      });

    res.json(productsUnit.rows[0]);
  } catch (error) {
    next(error);
  }
};

const postProducts = async (req, res, next) => {
  const product = req.body;

  console.log("f1");

  console.log(product);
  res.send("Creando productos S");
};

const deleteProducts = async (req, res, next) => {
  res.send("Eliminando productos");
};

const putProducts = async (req, res, next) => {
  res.send("Actualizando productos");
};


let allShoppingCart = [];

const getFrontend = async (req, res) => {
  allShoppingCart = await req.body.allProducts;
  console.log(allShoppingCart);
  // Do something with allProducts

  //module.exports.allProducts = allProducts ;
  res.send("Received allProducts1");
};

const CreateOrder = async (req, res) => {
  const result = mercadopago.configure({
    access_token:
      "TEST-8843625446242108-010322-cea5e3ffa5d7b3c0b8b5b5ce48a2375b-386315372",
    // access_token: process.env.ACCESS_TOKEN ,
  });

  //allProducts = req.body;

  const NuevoArray = allShoppingCart.map((e) => {
    return {
      title: e.producto,
      quantity: e.cantidad_carrito,
      currency_id: "COP",
      unit_price: e.precio_pesos,
      description: e.descripcion,
    };
  });

  try {
    const preference = {
      items: NuevoArray,

      back_urls: {
        success: "https://render-frontend-react-healthfoods.onrender.com/",

        

        failure: "https://render-frontend-react-healthfoods.onrender.com/",

      },

      auto_return: "approved",
    };

    const respuesta = await mercadopago.preferences.create(preference);
    console.log(respuesta);
    res.status(200).json(respuesta.response.init_point);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }

  //res.send("creando orden ");
  console.log(result);
};

module.exports = {
  getAllProducts,
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,

  getFrontend,

  CreateOrder,
};
