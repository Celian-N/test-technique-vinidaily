const { getDb } = require("../db");

getWines = async () => {
  const database = getDb();
  const winesCollection = database.collection("wines");

  return await (await winesCollection.find()).toArray();
};

module.exports = {
  getWines,
};
