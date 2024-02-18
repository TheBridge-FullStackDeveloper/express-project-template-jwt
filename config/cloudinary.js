// app.js
const cloudinary = require('cloudinary').v2;

// sin esta linea no podemos utilizar las variables de entorno
require('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;
