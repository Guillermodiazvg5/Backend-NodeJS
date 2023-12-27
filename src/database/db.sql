CREATE DATABASE healthFoods

CREATE TABLE nuts(
   id SERIAL PRIMARY KEY,
   producto VARCHAR(255) UNIQUE,
   descripcion VARCHAR(255),
   precio_pesos INT,
   cantidad_gramos INT,
   ruta_img VARCHAR(255),
   fecha_vencimiento DATE

);