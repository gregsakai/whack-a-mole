$("#submitName").click( function(){
  $.post( $("#nameForm").attr("action"), $("#nameForm :input").serializeArray(), function(info){ $("currentLeader").html(info); });
  clearInput();
});

$("#nameForm").submit( function(){
  return false;
});

function clearInput(){
  $("#nameForm :input").each( function(){
    $(this).val('');
  });
}

// SCORE

// $("#stop").click( function(){
//   $.post()
// });
