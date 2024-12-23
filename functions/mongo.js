const { MongoClient } = require('mongodb');

const uri = "your-mongo-connection-string"; // Use MongoDB Atlas or other remote MongoDB

const client = new MongoClient(uri);

module.exports.handler = async (event, context) => {
  try {
    await client.connect();
    const database = client.db('testdb');
    const collection = database.collection('testcollection');

    // Example: Fetch data
    const data = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  } finally {
    await client.close();
  }
};