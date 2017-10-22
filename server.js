var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;


// temporary placement of this conenction
const connection = require('./config/connection.js');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.get('/', (req,res) => {
	connection.query(`SELECT * FROM burgers`, (err,result) => {
		if (err) {
			console.log(err);
		} 
		res.render('index', {thing: result});
	})
})


app.get('/burgers/:id', (req, res) => {
	connection.query(`SELECT * FROM burgers WHERE id=${req.params.id}`, (err, result) => {
		res.send(result[0]);
	})
})

app.post('/burgers/create', (req,res) => {
	let obj = req.body;
	console.log(obj);

	connection.query(`INSERT INTO burgers (name, bun, beef_patty, lettuce, tomato, onion, cheese) VALUE ('${obj.name}', ${obj.bun}, ${obj.beef_patty}, ${obj.lettuce}, ${obj.tomato}, ${obj.onion}, ${obj.cheese})`, (err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result);
			}
		})
})


app.delete('/burgers/delete/:name', (req,res) => {
	connection.query(`DELETE FROM burgers WHERE name='${req.params.name}'`, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	})
})


app.put('/burgers/update/:name/:option/:value', (req,res) => {
	connection.query(`UPDATE burgers SET ${req.params.option}='${req.params.value}' WHERE name='${req.params.name}'`, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	})
})



app.listen(port, console.log(`Server active on port ${port}`));




