$(window).on('load',function() {   
    $(".loader").hide(0);  
  });
  
  
  $('.about_text').click(function(){
       $('.bag').delay(1000).hide(0);
      $('#land').delay(1000).hide(0);
      $('.socialwrapper').delay(1000).hide(0);
           $('.slider').delay(1000).hide(0);
           $('.row').delay(1000).hide(0);
           $('.applications').delay(1000).hide(0);
  $('.about_para').delay(1000).slideDown(800);
  
  });
  
  
  $('.contact_text').click(function(){
       $('.bag').delay(1000).hide(0);
      $('#land').delay(1000).hide(0);
      $('.about_para').delay(1000).hide(0);
           $('.slider').delay(1000).hide(0);
           $('.row').delay(1000).hide(0);
           $('.applications').delay(1000).hide(0);
      $('.socialwrapper').delay(1000).slideDown(800);
      $('.socialwrapper').css('dispaly','grid');
  });
  
//   $('.bag_text').click(function(){
//       $('#land').delay(1000).hide(0);
//       $('.slider').delay(1000).hide(0);
//       $('.about_para').delay(1000).hide(0);
//       $('.socialwrapper').delay(1000).hide(0);
//           $('.row').delay(1000).hide(0);
//           $('.applications').delay(1000).hide(0);
//       $('.bag').delay(1000).slideDown(800);
//   });
  
  $('.first p').click(function(){
  $('.bag').delay(1000).hide(0);
  $('.applications').delay(1000).hide(0);
      $('.row').delay(1000).hide(0);
  $('.slider').delay(1000).show(2000);
  });
  
  $('.second p').click(function(){
  $('.bag').delay(1000).hide(0);
  $('.slider').delay(1000).hide(0);
  $('.applications').delay(1000).hide(0);
  $('.row').delay(1500).slideDown(1000);
  
  });
  
  $('.third p').click(function(){
  $('.bag').delay(1000).hide(0);
  $('.slider').delay(1000).hide(0);
  $('.row').delay(1000).hide(0);
  $('.applications').delay(1500).slideDown(0);
  
  });
  $('.slider-list__item img').click(function(){
   var src =  $(this).attr('src');
   $('.image_viewer img').attr('src', src);
   $('.image_viewer').css('display', 'block');
  });

  $('.image_viewer').click(function() {
    $('.image_viewer').css('display', 'none');
  });
  
  
