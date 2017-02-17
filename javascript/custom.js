$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");
});

$('.modal-trigger').leanModal();

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
	triggerElement: "#pinned-trigger1",
	triggerHook: 0,
	reverse: true
})
.setPin("#pinned-element2")
.addTo(controller);


// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.grid').isotope({
	itemSelector: '.element-item',
	layoutMode: 'fitRows'
});

// bind filter button click
$('#filters').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	// use filterFn if matches value
	// filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$( this ).addClass('is-checked');
	});
});

// lightGallery(document.getElementById('lightgallery'));
$('#animated-thumbnails1').lightGallery({
    thumbnail:true,
	animateThumb: false,
    showThumbByDefault: false
});
$('#animated-thumbnails2').lightGallery({
    thumbnail:true,
	animateThumb: false,
    showThumbByDefault: false
});
$('#animated-thumbnails3').lightGallery({
    thumbnail:true,
	animateThumb: false,
    showThumbByDefault: false
});
$('#animated-thumbnails4').lightGallery({
    thumbnail:true,
	animateThumb: false,
    showThumbByDefault: false
});
