var num_grids_hw = 16;
var total_num_grids = num_grids_hw * num_grids_hw;
var container_width = 640;


function calcGridSize(num_of_grids){
  grid_size = container_width / num_of_grids;
};


function drawGrids(num_of_grids){ 
  calcGridSize(num_grids_hw);
  console.log("gridsize= " + grid_size);

  for (i = 0; i < num_of_grids; i++) {
    $("#container").append("<div class='grid_square'></div>");
  };

  // set the css after we make the divs. doing it inside the loop
  // applies it every time we make a div, which is too time-consuming
  $('.grid_square').css({'width': grid_size,
                         'height': grid_size});
};

function resetGrids(){
  $("#container").empty();
  num_grids_hw = prompt("Enter resolution (number of grid squares):");
  total_num_grids = num_grids_hw * num_grids_hw;
  drawGrids(total_num_grids);

  $(".grid_square").mouseenter(function() {
    $(this).addClass('shaded');
  });
};



$(document).ready(function(){
  drawGrids(total_num_grids);

  $(".grid_square").mouseenter(function() {
    $(this).addClass('shaded');
  });
});
