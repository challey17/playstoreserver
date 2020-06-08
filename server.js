// server boilerplate
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("common")); // let's see what 'common' format looks like

app.get("/books", (req, res) => {
  // ALL OUR CODE HERE
});

app.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
