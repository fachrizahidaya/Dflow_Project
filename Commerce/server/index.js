const express = require("express");
const cors = require("cors");
const PORT = 8000;
const db = require("./models");
const bearerToken = require("express-bearer-token");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bearerToken());
app.use("/Public", express.static(path.join(__dirname, "/Public")));

const { user, product, transaction } = require("./routers");

app.use("/user", user);
app.use("/product", product);
app.use("/transaction", transaction);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    // db.sequelize.sync({ alter: true });
    console.log(`APP RUNNING at ${PORT} ✅`);
  }
});
