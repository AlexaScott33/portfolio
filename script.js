'use strict';

/* global $ */

let stickyTop = $('#stickyBanner').offset().top;

$(document).ready(function(){
  if ($('.menu').show()){
    $(window).on( 'scroll', function(){
      $('.menu').hide();
      $('.cross').hide();
    });
  }
  
});

//hide hamburger and show once scrolled
// show hamburger on mobile always
$(document).ready(function(){
  if ($(window).width() <= 480){
    $('.nav-bar').hide();
    $('.hamburger').show();
    $(window).on( 'scroll', function(){
      if ($(window).scrollTop() >= stickyTop) {
        $('.nav-bar').hide();
        $('.hamburger').show();
      }
    });
  }
  if ($(window).width() >= 640){	
    $('.nav-bar').show();
    $('.hamburger').hide();
    $(window).on( 'scroll', function(){
      if ($(window).scrollTop() >= stickyTop) {
        $('.nav-bar').hide();
        $('.hamburger').show();
      } 
      else {
        $('.hamburger').hide();
        $('.nav-bar').show();
      }
    });
  }
  if ($(window).width() >= 960){	
    $('.nav-bar').show();
    $('.hamburger').hide();
    $(window).on( 'scroll', function(){
      if ($(window).scrollTop() >= stickyTop) {
        $('.nav-bar').hide();
        $('.hamburger').show();
      } 
      else {
        $('.hamburger').hide();
        $('.nav-bar').show();
      }
    });
  }
  if ($(window).width() >= 1600){	
    $('.nav-bar').show();
    $('.hamburger').hide();
    $(window).on( 'scroll', function(){
      if ($(window).scrollTop() >= stickyTop) {
        $('.nav-bar').hide();
        $('.hamburger').show();
      } 
      else {
        $('.hamburger').hide();
        $('.nav-bar').show();
      }
    });
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



//menu animation
$( document ).ready(function() {
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