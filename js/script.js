
var rows = 50;
var cols = 50;
var cell_width = (800 / cols)-2;
var cell_height = (800 / rows)-2;

$(document).ready(function() {
  create(16);
  $('#button').hover(function(){
    $(this).css('background-color','#34c').css('color', 'white');
  }, function() {
    $(this).css('background-color','#c0c0c0').css('color','black');
  }).click(function() {
    var size = prompt("Please enter the grid size : ")
    create(size);
    $('#container > .unit').css("background-color", "white");
  });
});

function create(size) {
  $('#container').empty();
  size_dim = (800/size)-2;
  for(var x = 0; x < size; x++) {
    for(var y = 0; y < size; y++) {
      var unit = $("<div class='unit'></div>");
      unit.appendTo('#container');
    }
  }
  $('.unit').width(size_dim).height(size_dim);
  $('.unit').hover(function(){
    $(this).css("background-color", "rgba(255,255,255,0.1)");
  });

}

function reset() {
  var size = prompt("Please enter the grid size : ")
  create(size);
  $('#container > .unit').css("background-color", "blue");
}
