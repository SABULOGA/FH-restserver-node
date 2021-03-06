// puerto
process.env.PORT = process.env.PORT || 3000;

// entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// vencimiento token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// seed token
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// base datost
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    //urlDB = 'mongodb+srv://Alba:54podeqmT8jC1lFR@cluster0-mq0ph.mongodb.net/cafe';
}

process.env.URLDB = urlDB;