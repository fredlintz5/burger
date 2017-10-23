const orm = require('../model/burger.js');
const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
	orm.selectAll((result) => {
		res.render('index', {thing: result});;
	});
})


router.get('/burgers/:id', (req, res) => {
	orm.selectSpecific(req.params.id, (result) => {
		res.send(result);
	});	
})


router.post('/burgers/create', (req,res) => {
	orm.createNew(req.body, (result) => {
		res.send(result);
	});	
})


router.delete('/burgers/delete/:name', (req,res) => {
	let result = orm.deleteBurger(req.params.name); 
	
	res.send(result);
})


router.put('/burgers/update/:name/:option/:value', (req,res) => {
	orm.updateBurger(req.params.option, req.params.value, req.params.name, (result) => {
		res.send(result);
	});	
})


module.exports = router;



