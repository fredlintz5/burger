const routes = require('./controllers/burgers_controller.js');
const exphbs = require('express-handlebars');
const bParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(bParser.urlencoded({ extended: false }));
app.use(bParser.json());
app.use(express.static('public'));

app.use("/", routes);


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.listen(port, console.log(`Server active on port ${port}`));