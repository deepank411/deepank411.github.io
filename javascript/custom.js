$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");
});

$(".button-collapse").sideNav();
$('.modal-trigger').leanModal();
$('.slider').slider({});
$('.carousel').carousel();

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
   triggerElement: "#pinned-trigger1",
   triggerHook: 0,
   reverse: true,
	refreshInterval: 1
})
.setPin("#pinned-element1")
.addTo(controller);
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
    console.log(filterValue);
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
