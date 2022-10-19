const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const bodyparser = require("body-parser");
const config = require("./src/shared/config");
const apiroutes = require("./src/routes/index");
app.server = http.createServer(app);

// set limit to data to be transfered
app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ limit: "50mb" }));

// parse the request in json format
var jsonparser = bodyparser.json();

app.use(jsonparser);

// redirect to routes if /api is used
app.use("/api", apiroutes);
app.use((req, res) => {
  res.status(404).json({
    message: `${req.url} not found`,
  });
});

app.listen(5000, () => {
  console.log(`the server started on server ${config.port}`);
});
