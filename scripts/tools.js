$(document).ready(function(){
  $("#subscribe").submit(function() {
    
  //Do the AJAX post
  $.post($("#subscribe").attr("action"), $("#subscribe").serialize(), function(data) {
    if (data == "OK") {
      $("#success").show();
    } else {
      $("fail").show();
    }
  });

  //Important. Stop the normal POST
  return false;
  });
});