
const connection = require('./connection.js');

// CRUD
let orm = {

	createNew: function(newBurger) {
		let obj = newBurger;

		connection.query(`INSERT INTO burgers (name, calories, bun, beef_patty, lettuce, tomato, onion, cheese, ketchup, mayo, mustard) VALUE ('${obj.name}', ${obj.cal}, ${obj.bun}, ${obj.pat}, ${obj.let}, ${obj.tom}, ${obj.oni}, ${obj.che}, ${obj.ket}, ${obj.may}, ${obj.mus})`, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				console.log(result);
			}
		})
	},

	selectAll: function() {
		connecton.query(`SELECT * FROM burgers`, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				console.log(result);
			}
		})
	},

	updateBurger: function(column, newValue, id) {
		connection.query(`UPDATE burgers SET ${column}=${newValue} WHERE id=${id}`, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				console.log(result);
			}
		})
	},

	deleteBurger: function(id) {
		connection.query(`DELETE FROM burgers WHERE id=${id}`, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				console.log(result);
			}
		})
	}
};


module.exports = orm;
