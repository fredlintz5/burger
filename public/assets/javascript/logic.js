

function addIngredientsToModal(object) {
	$('#burgerName').text(object.name);

	let li = '<li>';

	if (object.bun === 1) {
		li += 'Bun</li>';
	}
	if (object.beef_patty === 1) {
		li += '<li>Beef Patty</li>';
	}
	if (object.cheese === 1) {
		li += '<li>Cheese</li>';
	}
	if (object.lettuce === 1) {
		li += '<li>Lettuce</li>';
	}
	if (object.tomato === 1) {
		li += '<li>Tomato</li>';
	}
	if (object.onion === 1) {
		li += '<li>Onion</li>';
	} 

	$('#ingredientsList ul').html(li);
	$('#ingredientsModal').modal('toggle');	
}


function hideShow(id, id2) {
	$(id).toggleClass('hide');
	$(id2).toggleClass('hide');
}


$('#ingredients').on('click', 'button', function() {
	switch ($(this).html()) {
		case 'Bun':
			hideShow('#topBunImg', '#botBunImg')
			break;
		case 'Beef':
			hideShow('#beeImg')
			break;
		case 'Lettuce':
			hideShow('#letImg')
			break;
		case 'Tomato':
			hideShow('#tomImg')
			break;
		case 'Onion':
			hideShow('#oniImg')
			break;
		case 'Cheese':
			hideShow('#cheImg')
			break;
	}
})


$('#createBut').on('click', function() {
	let newBurger = {
		name: '',
		bun: 1,
		beef_patty: 1,
		cheese: 1,
		lettuce: 1,
		tomato: 1,
		onion: 1
	};

	if ($('#name').val() !== "") {

		newBurger.name = $('#name').val();

		if ($('#topBunImg').attr('class') === 'hide') {
			newBurger.bun = 0;
		}
		if ($('#letImg').attr('class') === 'hide') {
			newBurger.lettuce = 0;
		}
		if ($('#tomImg').attr('class') === 'hide') {
			newBurger.tomato = 0;
		}
		if ($('#oniImg').attr('class') === 'hide') {
			newBurger.onion = 0;
		}
		if ($('#cheImg').attr('class') === 'hide') {
			newBurger.cheese = 0;
		}
		if ($('#beeImg').attr('class') === 'hide') {
			newBurger.beef_patty = 0;
		}
		console.log(newBurger);

		$.ajax({
			url: '/burgers/create',
			type: 'POST',
			data: newBurger
		})
		.done(function(result) {
			console.log(result);
			location.reload();
		})

	} else {
		alert("Please add burger name before submiting");
	}
});


$('#upBut').on('click', function() {
	console.log("update");
});


$('#delBut').on('click', function() {
	console.log("delete");
});


$('#sqlButtons').on('click', 'button', function() {
	let id = $(this).data('id');
	console.log(id);

	$.ajax({
		url: '/burgers/' + id,
		type: 'GET',
	})
	.done(function(result) {
		addIngredientsToModal(result);
	})
});


