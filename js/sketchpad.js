var num_grids_hw = 16;
var total_num_grids = num_grids_hw * num_grids_hw;
var container_width = 640;
var div = document.createElement('div');

function drawGrids(num_grid){
	var grid_size = container_width / num_grids_hw;

	for (i = 0; i < total_num_grids; i++) {
		$("#container").append("<div class='grid_square'></div>");
	};

};

$(document).ready(function(){
	drawGrids(total_num_grids);

	$(".grid_square").mouseenter(function() {
		$(this).addClass('shaded');
	});
});
