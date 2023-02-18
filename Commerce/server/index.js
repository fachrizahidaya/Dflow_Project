const express = require('express')
const cors = require('cors')
const PORT = 8000
const db = require("./models")
const bearerToken = require('express-bearer-token')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())
app.use(bearerToken())

app.listen(PORT, (err) => {
    if (err) {
      console.log(`ERROR: ${err}`);
    } else {
      // db.sequelize.sync({ alter: true });
      console.log(`APP RUNNING at ${PORT} ✅`);
    }
  });