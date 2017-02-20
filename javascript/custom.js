$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");
});

console.log('%c Like what you see? If you\'re looking for the code, find it here: https://github.com/deepank411/deepank411.github.io', 'font-size: 25px; color: #666;');

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
	console.log(filterValue);
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

$('.screenshots').lightGallery({
    thumbnail:true,
	animateThumb: false,
    showThumbByDefault: false
});
