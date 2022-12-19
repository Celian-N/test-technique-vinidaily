const { getDb } = require("../db");

getWines = async (filter) => {
  const database = getDb();
  const winesCollection = database.collection("wines");
  const nPerPage = 30;
  return await (
    await winesCollection
      .find()
      .skip(filter.page > 0 ? (filter.page - 1) * nPerPage : 0)
      .limit(nPerPage)
  ).toArray();
};

module.exports = {
  getWines,
};
