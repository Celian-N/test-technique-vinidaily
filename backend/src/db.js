const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "local";
const client = new MongoClient(url);

const initDb = async () => {
  try {
    await client.connect();
    console.log("Database connected to server");
  } catch (error) {
    console.log(error);
  }
};

const getDb = () => {
  return client.db(dbName);
};

module.exports = {
  getDb,
  initDb,
};
