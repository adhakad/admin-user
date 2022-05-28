require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
var path = require('path');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.set('views', path.join(__dirname, 'views'));


app.use(express.json({ limit: "8mb" }));
app.use(cookieParser());
app.use(cors());

require("./routes")(app);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
