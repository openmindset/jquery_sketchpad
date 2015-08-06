var num_grids_hw = 16;
var total_num_grids = num_grids_hw * num_grids_hw;
var container_width = 640;
var div = document.createElement('div');

function drawGrids(num_of_grids){
	var grid_size = container_width / num_grids_hw;
	$('.grid_square').height(grid_size);
	$('.grid_square').width(grid_size);
		

	for (i = 0; i < num_of_grids; i++) {
		$("#container").append("<div class='grid_square'></div>");
		
	};

};

function resetGrids(){
	$("#container").empty();
	num_grids_hw = prompt("Enter resolution (number of grid squares):");
	total_num_grids = num_grids_hw * num_grids_hw;
	drawGrids(total_num_grids);
};



$(document).ready(function(){
	drawGrids(total_num_grids);

	$(".grid_square").mouseenter(function() {
		$(this).addClass('shaded');
	});
});
