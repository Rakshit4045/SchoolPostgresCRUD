const db = require("../models");
const School = db.schools;
const Op = db.Sequelize.Op;

//add new school
exports.create = (req, res) => {
	
	if(!req.body.name){
		res.status(400).send({
			message: "Content cannot be empty!"
		});
		return;
	}

	const { name, address, emp, std_1_fee,
		std_2_fee, std_3_fee, std_4_fee, std_5_fee,
		std_6_fee, std_7_fee, std_8_fee, std_9_fee,
		std_10_fee, std_11_fee, std_12_fee, Q1_date,
		Q2_date, Q3_date, Q4_date }  = req.body;

    School.create({
        name, address, emp, std_1_fee,
		std_2_fee, std_3_fee, std_4_fee, std_5_fee,
		std_6_fee, std_7_fee, std_8_fee, std_9_fee,
		std_10_fee, std_11_fee, std_12_fee, Q1_date,
		Q2_date, Q3_date, Q4_date
    })
    .then(schools => res.status(200).send(schools))
    .catch((e)=>{
    	res.send(e);
    });
};

//find all schools
exports.findAll = (req, res) => {
	School.findAll()
		.then(schools => {
            res.status(200).send(schools);
        })
        .catch((err)=>{
            console.log(err)
            res.sendStatus(500)
        });
};

//find specific school
exports.findOne = (req, res) => {
	const id = req.params.id;

	School.findByPk(id)
		.then(data => {
			if(data){
				res.send(data);
			}else{
				console.log("Error while reteriving");
				res.status(404);
			}
		});
}

//update specific school
exports.update = (req, res) => {
	const id = req.params.id;

	School.update(req.body, {
		where: {id: id}
	})
	.then(num => {
		if(num == 1){
			res.send("Document was updated");
		}else{
			res.send("Cannot update Document");
		}
	})
	.catch(err => {
		res.send(err);
	});
};

//delete specific school
exports.delete = (req, res) => {
	const id = req.params.id;

	School.destroy({
		where: {id: id}
	})
	.then(num => {
		if(num == 1){
			res.send("Document was deleted");
		}else{
			res.send("Cannot delete Document");
		}
	})
	.catch(err => {
		res.send(err);
	});
}