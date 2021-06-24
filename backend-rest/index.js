const express = require("express");
const path = require("path");

const sequelize = require("./util/database");

const storeRoutes = require("./routes/store");
const categoryRoutes = require("./routes/category");
const menuRoutes = require("./routes/menu");

//initialize app with express
const app = express();

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// //set proper headers on backend
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

//routes
app.use("/stores", storeRoutes);
app.use("/categories", categoryRoutes);
app.use("/menu", menuRoutes);
app.use("/dev", require("./routes/dev")); //All test routes are placed here

(async () => {
  try {
    await sequelize.sync({ force: false }); //Reset db every time
    app.listen(process.env.EXTERNAL_PORT); //DEF in docker.compose.yml
  } catch (error) {
    console.log(error);
  }
})();

module.exports = app;
