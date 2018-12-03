var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.websites h1', .5, {x:200, opacity: 0});
tl.from('.websites_container .text_container', 1, { y:200, opacity: 0}, "=-.5");
tl.from('.website_img_container img', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");


tl2.from(".app_img_container img", .5, { x:200, opacity: 0 });
tl2.from(".app_container .text_container", 1, {y:200, opacity: 0}, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".websites_container",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".websites_container")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".app_container",
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(".app_container")
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
}