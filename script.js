'use strict';

/* global $ */

$(window).resize(function(){
  if ($(window).width() <= 640){	
    $('.nav-bar').hide();
    $('.hamburger').show();
  } else {
    $('.nav-bar').show();
    $('.hamburger').hide();
  }	
});

//nav scroll to on click
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

let stickyTop = $('#stickyBanner').offset().top;

$(window).on( 'scroll', function(){
  if ($(window).scrollTop() >= stickyTop) {
    //console.log('not at the top');
    $('.nav-bar').hide();
    $('.hamburger').show();
  } else {
    //console.log('at the top');
    $('.hamburger').hide();
    $('.nav-bar').show();
  }
});

//hide hamburger and show once scrolled
$(document).ready(function(){
  if ($(window).width() <= 640){	
    $('.nav-bar').hide();
    $('.hamburger').show();
  } else {
    $('.nav-bar').show();
    $('.hamburger').hide();
  }	
});



//menu animation
$( document ).ready(function() {
  // $('.hamburger').hide();
  // if($(window).scroll(function(){
  //   $('.nav-bar').hide();
  //   $('.hamburger').show();
  $( '.cross' ).hide();
  $( '.menu' ).hide();
  $( '.hamburger' ).click(function() {
    $( '.menu' ).slideToggle( 'slow', function() {
      $( '.hamburger' ).hide();
      $( '.cross' ).show();
    });
  });

  $('.menu-item').click(function() {
    $('.menu').hide();
    $( '.cross' ).hide();
  });
  
  $( '.cross' ).click(function() {
    $( '.menu' ).slideToggle( 'slow', function() {
      $( '.cross' ).hide();
      $( '.hamburger' ).show();
    });
  });
});