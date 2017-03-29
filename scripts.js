
//on click of the choose file btn/input:
//  * have user select the file
//  * collect the title and caption of the file
//  * append the new 'item-box' with the photo,title,caption
//  * if they haven't entered a title and caption, ask for it here
//  * resize the photo so it fits and loads quickly

//where will the photo be from? just the photos directory?
//allow fotos from anywhere.
function Item(title, caption, fileName){
	this.title = title;
	this.caption = caption;
	this.fileName = fileName;
}

function checkForFullFields() {
	if($('#title-input').val() === '' || $('#caption-input').val() === "" || $('.input-file').val() === '') {
		return alert('Please supply required information for each field.');
	}
}

function prependDisplayField(newObject){
	$('.display-fields').prepend(`
		<article class="item-box">
		<h3>${newObject.title}</h3>
		<img class="photos" src="photos/${newObject.fileName}" alt="${newObject.title + " " +newObject.caption}" width="150px">
		<h3>${newObject.caption}</h3>
		<div class="rating-btns">
		<button id="garbage-btn" class="item-btn" type="button" name="garbage"></button>
		<button id="love-it-btn" class="item-btn" type="button" name="love"></button>
		</div>
		</article>`);
}

$('#save-btn').on('click', function() {
	checkForFullFields();
	var title = $('#title-input').val();
	var caption = $('#caption-input').val();
	var fotoFileFake = $('.input-file').val();
	var fileName = fotoFileFake.replace(/^.*\\/, "");
	var newObject = new Item(title, caption, fileName)
	prependDisplayField(newObject);
	$('.directions').text('');
});

$('.display-fields').on('click', '#garbage-btn', function() {
	console.log('garbage-btn clicked');
	$(this).closest('.item-box').remove();
})

$('.display-fields').on('click', '#love-it-btn', function() {
	$(this).closest('.item-box').toggleClass('love-it');
	$(this).closest('#love-it-btn').css('background-image', 'url(photos/favorite-active.svg)')
});

















/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function( $, window, document, undefined )
{
	$( '.input-file' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				$label.find( 'span' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
	});
})( jQuery, window, document );
