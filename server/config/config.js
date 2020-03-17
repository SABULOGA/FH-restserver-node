// puerto
process.env.PORT = process.env.PORT || 3000;

// entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// base datost
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    //urlDB = 'mongodb+srv://Alba:54podeqmT8jC1lFR@cluster0-mq0ph.mongodb.net/cafe';
}

process.env.URLDB = urlDB;