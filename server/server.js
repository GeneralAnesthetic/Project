var express = require("express");
var mongoose = require("mongoose");
// JSON WEB TOKENS NPM: Issuer(iss)Validation, Expirations(exp),.sign()
// var jsonwebtokens = require("jsonwebtokens");
var routes = require("./routes");
// this solves error 424 .open()....
// mongoose.Promise = global.Promise;

// (node:9444) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
mongoose.connect(
  "mongodb://localhost:27017/snippets",
  err => {
    if (err) console.log("Failed to connect to the database", err);
  }
);

const app = express();

// // parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// // parse application/json
app.use(express.json());

// if (process.env.NODE.ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use("/api", routes);
const PORT = process.env.PORT || 4040;
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// "start:server": "nodemon --exec babel-node -- server/server.js"
