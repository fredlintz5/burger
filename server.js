var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();
var port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


let example = [{name:'Classic'},{name:'Vegan'},{name:'Slim'}];


app.get('/', (req,res) => {
	res.render('index', {thing: example});
})


app.listen(port, console.log(`Server active on port ${port}`));

