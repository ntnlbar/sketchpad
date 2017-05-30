
var rows = 50;
var cols = 50;
var cell_width = (800 / cols)-2;
var cell_height = (800 / rows)-2;

$(document).ready(function() {
  for(var x = 0; x < rows; x++) {
    for(var y = 0; y < cols; y++) {
      var unit = $("<div class='unit'></div>");
      unit.appendTo('#container');
    }
  }
  $('.unit').width(cell_height).height(cell_height);
  $('.unit').hover(function(){
    $(this).css("background-color", "yellow");
  });
  $('#button').hover(function(){
    $(this).css('background-color','#34c').css('color', 'white');
  }, function() {
    $(this).css('background-color','#c0c0c0').css('color','black');
  })
    .click(function() {
      $('#container > .unit').css("background-color", "blue");
    });

});
