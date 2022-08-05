var testVar = 'ok';
$(document).ready(function(){


  // random position for webcam footage

  $('#p5Container').hover(function(){
    $(this).css({
      'cursor':'grab',
    })
  })


  $('#p5Container').mousedown(function(){
    $(this).css({
      'cursor':'grabbing',
    })
    $(".draggable").draggable();
  });
  
  $('body').dblclick(function(){
    location.reload(true);
  });

  // $('.letter').mousedown(function(){
  //   $(".draggable").draggable();
  // });
  
  
});

// how to let transformation take place fully if mouse leaves immediately after?
// how to let this be a continually triggered motion, instead of a one time thing?

