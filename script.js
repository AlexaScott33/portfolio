'use strict';

/* global $ */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') 
            || location.hostname === this.hostname) {
    
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// function on() {
//   document.getElementById('overlay').style.background = 'url(https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47b63db904d2c72377ffc588f645eb45&auto=format&fit=crop&w=2550&q=80)';
// }

// function run(interval, frames) {
//   var int = 1;
  
//   function func() {
//     console.log(document.body.id);
//     document.body.id = 'b'+int;
//     int++;
//     if(int === frames) { int = 1; }
//   }
  
//   let swap = window.setInterval(func, interval);
// }

// run(1000, 10); //milliseconds, frames


// $(function() {
//   let title = $('title');
//   let backgrounds = new Array(
//     'url(https://images.unsplash.com/photo-1518658963559-3698900fc8a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aefc46a158500b5950d052278a793663&auto=format&fit=crop&w=1267&q=80)',
//     'url(https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47b63db904d2c72377ffc588f645eb45&auto=format&fit=crop&w=2550&q=80)'
//   );
//   let current = 0;
  
//   function nextBackground() {
//     title.css(
//       'background',
//       backgrounds[current = ++current % backgrounds.length]
//     );
  
//     setTimeout(nextBackground, 10);
//   }
//   setTimeout(nextBackground, 10);
//   title.css('background', backgrounds[0]);
// });