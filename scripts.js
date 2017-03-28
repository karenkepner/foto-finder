
//on click of the choose file btn/input:
//  * have user select the file
//  * collect the title and caption of the file
//  * append the new 'item-box' with the photo,title,caption
//  * if they haven't entered a title and caption, ask for it here
//  * resize the photo so it fits and loads quickly

//where will the photo be from? just the photos directory?
//allow fotos from anywhere.

$('#save-btn').on('click', function() {
	console.log('save button clicked');
	var $title = $('#title-input').val();
	var $caption = $('#caption-input').val();
	console.log('title: ' + $title);
	console.log('caption: ' + $caption);
	var $fotoFileFake = $('.input-file').val();
	var $fotoFile = $fotoFileFake.replace(/^.*\\/, "");
	console.log("the fotoFile: " + $fotoFile);
	$('.display-fields').prepend(`
		<article class="item-box">
		<h3>${$title}</h3>
		<img class="photos" src="photos/${$fotoFile}" alt="${$title + " " +$caption}" width="150px">
		<h3>${$caption}</h3>
		<div class="rating-btns">
			<button id="garbage-btn" class="item-btn" type="button" name="garbage"></button>
			<button id="love-it-btn" class="item-btn" type="button" name="love"></button>
		</div>
	</article>`)
})

















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
