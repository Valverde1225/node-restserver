// ===============
// Puerto
// ===============
process.env.PORT = process.env.PORT || 3000;


// ===============
// Entorno
// ===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============
// Base de datos
// ===============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/CafeDB';
} else {
    urlDB = 'mongodb+srv://ivanadm:vd1Vm14MQ0Nm5h1X@cluster0.g9svp.mongodb.net/cafe?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;