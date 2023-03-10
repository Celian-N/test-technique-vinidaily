const createError = require("http-errors");
const express = require("express");
const path = require("path");
const winesRouter = require("./routes/wines.router");

const { initDb } = require("./db");

initDb();

const app = express();

const cors = require("cors");

app.use(cors());
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/wines', winesRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
