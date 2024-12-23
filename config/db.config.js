// 'use strict';
// const MYSQL  = require('mysql');
// const CONFIG = require('./config');

// // Create a connection to the database
// const connection = MYSQL.createConnection({
//   connectionLimit : CONFIG.DB_CONFIG.CONNECTION_LIMIT || 500,
//   host: CONFIG.DB_CONFIG.HOST,
//   user: CONFIG.DB_CONFIG.USER,
//   password: CONFIG.DB_CONFIG.PASSWORD,
//   database: CONFIG.DB_CONFIG.DATABASE_NAME,
//   supportBigNumbers:true,
//   connectTimeout  : 60 * 60 * 1000,
//   acquireTimeout  : 60 * 60 * 1000,
//   timeout         : 60 * 60 * 1000,
//   multipleStatements: true,
//   charset : 'utf8mb4'
// });

// // Connect to the database
// connection.connect((err) => {
//     if (err){ console.log("ERROR ===>>",err.message)}
//     console.log('Connected to MySQL database');
//   });
  


//   module.exports=connection;

const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb://127.0.0.1:27017/testDatabase";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
async function connect() {
  try {
    // "mongodb://127.0.0.1:27017/testDatabase"
    // mongodb+srv://sakshi:sakshi@cluster0.ejqkg17.mongodb.net/testDatabase
    // mongo "mongodb+srv://sakshi:password@cluster0.ejqkg17.mongodb.net/myDatabase?retryWrites=true&w=majority"

   // const uri = "mongodb://127.0.0.1:27017/testDatabase";
   const uri = "mongodb+srv://sakshi:sakshi123@cluster0.ejqkg17.mongodb.net/testDatabase"
    const db = await mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
    console.log('MongoDB connected successfully');
    return db; // Return the database connection
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    return null;
  }
}

// Export the connect function
module.exports = connect;
