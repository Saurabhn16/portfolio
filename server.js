require("dotenv").config();
import("chalk").then((chalk) => {
  const express = require("express");
  const bodyParser = require("body-parser");
  const path = require("path"); // Import the path module
  const cookieParser = require("cookie-parser");
  const app = express();
  const port = process.env.PORT || 3000;

  // Middleware
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname)));
  app.use(bodyParser.json());

 

  // Routes
  app.get("/",  (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });




  app.get("/Dsa",  (req, res) => {
    res.sendFile(path.join(__dirname, "ourmentor.html"));
  });

  app.get("/Projects",  (req, res) => {
    res.sendFile(path.join(__dirname, "program.html"));
  });


  app.listen(port, () => {
    console.log(chalk.default.green(`Server is running on port ${port}`));
  });
});
