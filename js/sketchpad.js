var num_grids = 16;
var container_width = 640;
var div = document.createElement('div');

function drawGrids(num_grid){
	var grid_size = container_width / num_grids;

	for (i = 0; i < num_grids; i++) {
		$("#container").append("<div class='grid_square'></div>");
	};

};

$(document).ready(function(){
	drawGrids(num_grids)	
});
