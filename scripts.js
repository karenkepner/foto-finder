function Item(title, caption, fileName){
	this.title = title;
	this.caption = caption;
	this.fileName = fileName;
}

function checkForFullFields() {
	if($('#title-input').val() === '' || $('#caption-input').val() === "" || $('.input-file').val() === '') {
		$('#save-btn').prop('disabled',true);
		} else {
			$('#save-btn').prop('disabled', false);
			return true;
		}
}

function prependDisplayField(newObject){
	$('.display-fields').prepend(`
		<article class="item-box">
		<h3 contenteditable>${newObject.title}</h3>
		<img class="photos" src="photos/${newObject.fileName}" alt="${newObject.title + " " +newObject.caption}" width="350px">
		<h3 contenteditable>${newObject.caption}</h3>
		<div class="rating-btns">
		<button id="garbage-btn" class="item-btn" type="button" name="garbage"></button>
		<button id="love-it-btn" class="item-btn" type="button" name="love"></button>
		</div>
		</article>`);
}

// function sortFavoritesToTop() {
// 	$('.display-fields').forEach('.item-box').hasClass('.love-it').prepend()
// }

function clearInputFields() {
	$('#title-input').val('');
	$('#caption-input').val('');
	$('.input-file').val('');
	$('span').text('Choose File');
	$('.directions').text('');
}

$('.entry-fields').on('keyup mouseover', function() {
	checkForFullFields();
})

$('#save-btn').on('click', function() {
	if (checkForFullFields() === true) {
		var title = $('#title-input').val();
		var caption = $('#caption-input').val();
		var fotoFileFake = $('.input-file').val();
		var fileName = fotoFileFake.replace(/^.*\\/, "");
		var newObject = new Item(title, caption, fileName)
		prependDisplayField(newObject);
	};
	clearInputFields();
});

$('.display-fields').on('click', '#garbage-btn', function() {
	$(this).closest('.item-box').remove();
})

$('.display-fields').on('click', '#love-it-btn', function() {
	$(this).closest('.item-box').toggleClass('love-it');
	$(this).closest('#love-it-btn').css('background-image', 'url(photos/favorite-active.svg)')
});
