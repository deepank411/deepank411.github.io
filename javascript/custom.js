$(".button-collapse").sideNav();

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
   triggerElement: "#pinned-trigger1",
   triggerHook: 0,
   reverse: true
})
.setPin("#pinned-element1")
.addTo(controller);
