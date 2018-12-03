
$(document).ready(function() {

  
  anime.timeline()
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 900 * i;
    }
  }).add({
    targets: '.ml15',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    elasticity: 300,
    delay: 1100
  });

anime({
      targets: '.loader img',
    duration: 1000,
    easing: "easeOutCirc",
    elasticity: 800,
    rotate: [0,180,360],
    loop: true
});
  anime({
    targets: '.about_text',
marginRight:[-100,0],
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 500,
        elasticity: 600,
    delay:2000
  })
  anime({
        targets: '.bag_text',
marginLeft:[-100,0],
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 500,
    elasticity: 600,
    delay:2200
  })
  anime({
targets: '.contact_text',
translateY:[100,0],
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 500,
    elasticity: 600,
    delay:2400
  });
anime.timeline().add({
  targets: '.logo',
  translateY:[-100,0],
    easing: 'easeOutExpo',
    duration: 2000,
    elasticity: 600,
    delay:1500
});
  $('.ml12').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    }).add({
      targets: '.ml12 .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: function(el, i) {
        return 100 + 30 * i;
      }
    });

    $('.ml12_2').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
      });
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml12_2 .letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: function(el, i) {
            return 500 + 30 * i;
          }
        }).add({
          targets: '.ml12_2 .letter',
          translateX: [0,-30],
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 1100,
          delay: function(el, i) {
            return 100 + 30 * i;
          }
        });


        $('.ml12_3').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
          });
          
          anime.timeline({loop: true})
            .add({
              targets: '.ml12_3 .letter',
              translateX: [40,0],
              translateZ: 0,
              opacity: [0,1],
              easing: "easeOutExpo",
              duration: 1200,
              delay: function(el, i) {
                return 500 + 30 * i;
              }
            }).add({
              targets: '.ml12_3 .letter',
              translateX: [0,-30],
              opacity: [1,0],
              easing: "easeInExpo",
              duration: 1100,
              delay: function(el, i) {
                return 100 + 30 * i;
              }
            });
  
  var buttonEl = document.querySelectorAll('.nav_link');

function animateButton(el, ls, duration, elasticity) {
  anime.remove(el);
  anime({
    targets: el,
    duration: duration,
    elasticity: elasticity,
    transformOrigin: ['0px 50px', '0px 50px'],
    letterSpacing: ls
  });
}

function enterButton(el) {
  animateButton(el, '8px', 800, 200)
};

function leaveButton(el) {
  animateButton(el, '2px', 600, 300)
};





for (var i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener('mouseenter', function(e) {
    enterButton(e.target);
  }, false);
  
  buttonEl[i].addEventListener('mouseleave', function(e) {
    leaveButton(e.target)
  }, false);  
}


var contact_link = document.getElementById('nav_link3');
var overlay = document.getElementsByClassName('overlay-bottom');
function click() {
    animateOverlay(overlay, '100%', 800, 'easeOutExpo')
  }

  function animateOverlay(overlay, ls, duration, ease) {
    anime.remove(overlay);
    anime.timeline().add({
      targets: overlay,
      delay: 200,
      height: [
          {value: ls, duration: duration, easing: ease}
      ],
      
    }).add({
        targets: overlay,
        height: [
            {value: '0', duration: 500, easing: 'easeInExpo'}
        ]
    });
  }
    contact_link.addEventListener('click', () => {
      click();
    }, false);


    var portfolio_link = document.getElementById('nav_link2');
var overlay2 = document.getElementsByClassName('overlay-left');
function click2() {
    animateOverlay2(overlay2, '100%', 800, 'easeOutExpo')
  };

  function animateOverlay2(overlay2, ls, duration, ease) {
    anime.remove(overlay2);
    anime.timeline().add({
      targets: overlay2,
      delay: 200,
      width: [
          {value: ls, duration: duration, easing: ease}
      ],
      
    }).add({
        targets: overlay2,
        width: [
            {value: '0', duration: 500, easing: 'easeInExpo'}
        ]
    });
  }
    portfolio_link.addEventListener('click', function() {
      click2();
    }, false);



    var about_link = document.getElementById('nav_link1');
    var overlay3 = document.getElementsByClassName('overlay-right');
    function click3() {
        animateOverlay3(overlay3, '100%', 800, 'easeOutExpo')
      };
    
      function animateOverlay3(overlay3, ls, duration, ease) {
        anime.remove(overlay3);
        anime.timeline().add({
          targets: overlay3,
          delay: 200,
          width: [
              {value: ls, duration: duration, easing: ease}
          ],
          
        }).add({
            targets: overlay3,
            width: [
                {value: '0', duration: 500, easing: 'easeInExpo'}
            ]
        });
      }
        about_link.addEventListener('click', function() {
          click3();
        }, false);


  
$('.ml11 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
  $('.ml10 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  }).add({
    targets: '.ml11 .line',
    translateX: [0,$(".ml11 .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: function(el, i) {
      return 45 * i;
    }
  }).add({
    targets: '.ml10',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }).add({
    targets: '.ml11',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });






  
// $('.ml6 .letters').each(function(){
//   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
// });

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: function(el, i) {
//       return 50 * i;
//     }
//   }).add({
//     targets: '.ml6',
//     opacity: 1,
//     duration:800,
//     easing: "easeOutExpo",
//     delay: 300
//   });

 var skillset = document.querySelectorAll('.box #about_para img');

function animateSkillset(el, duration, elasticity, scale) {
  anime.remove(el);
  anime({
    targets: el,
    duration: duration,
    elasticity: elasticity,
    scale: scale
  });
}

function enter(el) {
  animateSkillset(el, 800, 500, 1.5)
};

function leave(el) {
  animateSkillset(el, 600, 500, 1)
};





for (var i = 0; i < skillset.length; i++) {
  skillset[i].addEventListener('mouseenter', function(e) {
    enter(e.target);
  }, false);
  
  skillset[i].addEventListener('mouseleave', function(e) {
    leave(e.target)
  }, false);  
}



// $('.bag_text').click(function(){
//   $('.hide_all').delay(1000).hide(0);


// });



});
