function hasScrolled(){var l=$(this).scrollTop();Math.abs(lastScrollTop-l)<=delta||(l>lastScrollTop&&l>navbarHeight?$("nav").removeClass("nav-down").addClass("nav-up"):l+$(window).height()<$(document).height()&&$("nav").removeClass("nav-up").addClass("nav-down"),lastScrollTop=l)}var didScroll,lastScrollTop=0,delta=1,navbarHeight=$("nav").outerHeight();$(window).scroll(function(l){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250);