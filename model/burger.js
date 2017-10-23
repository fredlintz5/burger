const connection = require('../config/connection.js');

// CRUD
let orm = {

	createNew: function(newBurger, cb) {
		let obj = newBurger;

		connection.query(`INSERT INTO burgers (name, bun, beef_patty, lettuce, tomato, onion, cheese) VALUE ('${obj.name}', ${obj.bun}, ${obj.beef_patty}, ${obj.lettuce}, ${obj.tomato}, ${obj.onion}, ${obj.cheese})`, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				 cb(result);
			}
		})
	},

	selectAll: function(cb) {
		connection.query(`SELECT * FROM burgers`, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				cb(result);
			}
		})
	},

	selectSpecific: function(id, cb) {
		connection.query(`SELECT * FROM burgers WHERE id=${id}`, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				 cb(result[0]);
			} 
		})
	},

	updateBurger: function(column, newValue, name, cb) {
		connection.query(`UPDATE burgers SET ${column}='${newValue}' WHERE name='${name}'`, (err, result) => {
			if (err) {
				console.log(err) 
			} else {
				 cb(result);
			}
		})
	},

	deleteBurger: function(name) {
		connection.query(`DELETE FROM burgers WHERE name='${name}'`, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				return result;
			}
		})
	}
};


module.exports = orm;
