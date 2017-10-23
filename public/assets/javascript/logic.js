
function addIngredientsToModal(object) {
	$('#burgerName').text(object.name);

	let li = '<li>';

	if (object.bun === 1) {
		li += 'Bun</li>';
	} else {
		li = "";
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

	$(this).toggleClass('deselect');
	
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

		$.ajax({
			url: '/burgers/create',
			type: 'POST',
			data: newBurger
		})
		.done(function(result) {
			location.reload();
		})

	} else {
		alert("Please add burger name before submiting");
	}
});


$('#upBut').on('click', function() {
	$('#updateModal').modal('toggle');

	$('#upButConfirm').on('click', function() {
		let name = $('#updateBurger').val().trim();
		let optionValue = $('#optionValue').val();
		let newValue = $('#newValue').val().trim();

		if (newValue === 'true') {
			newValue = 1;
		} else if (newValue === 'false') {
			newValue = 0;
		}

		if (name !== "" && newValue !== "") {
			$.ajax({
				url: `/burgers/update/${name}/${optionValue}/${newValue}/`,
				type: 'PUT',
			})
			.done(function(result) {
				location.reload();
			})
		}
	})	
});


$('#delBut').on('click', function() {
	$('#deleteModal').modal('toggle');

	$('#delButConfirm').on('click', function() {
		let name = $('#deleteBurger').val().trim();
		if (name !== "") {
			$.ajax({
				url: '/burgers/delete/' + name,
				type: 'DELETE',
			})
			.done(function(result) {
				location.reload();
			})
		}
	})	
});


$('#sqlButtons').on('click', 'button', function() {
	let id = $(this).data('id');

	$.ajax({
		url: '/burgers/' + id,
		type: 'GET',
	})
	.done(function(result) {
		addIngredientsToModal(result);
	})
});


