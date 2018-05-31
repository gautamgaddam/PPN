

$(document).ready(function () {
     const tilt = $('.profile-grid').tilt();
     const tilt1 = $('.work1').tilt();
     $('.profile-grid').tilt({
        speed: 500,
        scale:1.1,
        maxtilt:50,
        perspective: 500,
        glare: false,
        maxglare: 0.1
     });
     $('.work1').tilt({
        speed: 500,
        scale:1.1,
        maxtilt:50,
        perspective: 500,
        glare: false,
        maxglare: 0.1
     });
//    
//   var hT = $('.leaders-ib').offset().top,
//       hH = $('.leaders-ib').outerHeight(),
//       wH = $(window).height(),
//       wS = $(this).scrollTop();
//   if (wS > (hT+hH-wH)){
//       console.log('H1 on the view!');
//   }
  
  $(window).scroll(function(){
   var wScroll= $(this).scrollTop();
      var wH = $(window).height();
 if(wScroll> $('.works .work1').offset().top-wH){
       $('.works .work1').each(function(i){
           setTimeout(function(i){
               $('.works .work1').addClass('is-showing');
           }, 150*(i+1));
         
        });
    
 }
    if(wScroll> $('.edu .education').offset().top-500){
        $('.edu .education').addClass('animated ');
    }
    if(wScroll> $('.work-out .work').offset().top-500){
      $('.work-out .work').addClass('animated ');
    }
    if(wScroll> $('.get-touch').offset().top-500){
        $('.get-touch ').addClass('animated ');
    }
    if(wScroll> $('.get-touch').offset().top-500){
    $('.get-touch ').addClass('animated ');
    }
    if(wScroll> $('.box1').offset().top-500){
    $('.box1').addClass('animated ');
    if(wScroll> $('.box2').offset().top-500){
     $('.box2').addClass('animated ');
    }
   }
  });
});


