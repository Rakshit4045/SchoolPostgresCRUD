module.exports = app => {
	const schools = require("../controllers/school.controller.js");
	var router = require("express").Router();

	//create school
	router.post("/", schools.create);

	//Fetch all school
	router.get("/", schools.findAll);

	//Fetch a specific school
	router.get("/:id", schools.findOne);
	//Update documents
	router.put("/:id", schools.update);

	//delete specific documents
	router.delete("/:id", schools.delete);

	app.use('/api/schools', router);
};