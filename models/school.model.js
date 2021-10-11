module.exports = (sequelize, Sequelize) => {
	const School = sequelize.define("school", {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		address: {
			type: Sequelize.STRING,
			allowNull: false
		},
		emp: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_1_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_2_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_3_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_4_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_5_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_6_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_7_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_8_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_9_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_10_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_11_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		std_12_fee: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		Q1_date: {
			type: Sequelize.DATE,
			allowNull: false
		},
		Q2_date: {
			type: Sequelize.DATE,
			allowNull: false
		},
		Q3_date: {
			type: Sequelize.DATE,
			allowNull: false
		},
		Q4_date: {
			type: Sequelize.DATE,
			allowNull: false
		}
	});

	return School;
};