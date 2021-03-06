// ===============
// Puerto
// ===============
process.env.PORT = process.env.PORT || 3000;


// ===============
// Entorno
// ===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===============
// Vencimiento del Token
// ===============
process.env.CADUCIDAD_TOKEN = '48h';

// ===============
// Seed Autenticación
// ===============
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// ===============
// Base de datos
// ===============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/CafeDB';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ===============
// Google CLIENT id
// ===============

process.env.CLIENT_ID = process.env.CLIENT_ID || '395795426470-aoednf9fgpvrhjmfp4c0m79jds63hr07.apps.googleusercontent.com';