const express = require('express');
const bodyParser = require('body-parser');
var Sequelize = require("sequelize");

const app = express();

const db = require("./models");
db.sequelize.sync();

var sequelize = new Sequelize("postgres://postgres:269rakshit@localhost:3000/schooldb");

app.use(bodyParser.json());
app.use(express.json());


app.get("/", (req, res) => {
	res.send("This is home page");
});


const port = process.env.PORT || 8080;

require("./routes/school.routes.js")(app);

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});