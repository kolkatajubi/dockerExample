// Dependencies
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

// app.use(express.static(__dirname + "/css"));
// app.use(express.static(__dirname + "/videos"));

app.use(
  bodyparser.urlencoded({
    extended: false
  })
);

// Defining IP-Address and PORT number
const ipaddress = "0.0.0.0";
const port = 1995;

// Listening to the IP-Address:PORT number
app.listen(port, ipaddress, () =>
  console.log(`Listening at ${ipaddress}:${port}...`)
);

app.get("/", (req, res) => {
  res.send("THIS is MY first Dockerr APP");
});
