var drawer = {
	drawO: function (context, radius, center){
		context.beginPath();
		context.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
		context.lineWidth = 5;
		context.strokeStyle = '#00f';
		context.stroke();
	},
	drawX: function (context, length, center){
		var lowLeft = {
			x: center.x - length / 2,
			y: center.y + length / 2
		};
		var highRight = {
			x: center.x + length / 2,
			y: center.y - length / 2
		};
		var lowRight = {
			x: center.x + length / 2,
			y: center.y + length / 2
		};
		var highLeft = {
			x: center.x - length / 2,
			y: center.y - length / 2
		};
		
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#f00';
		context.moveTo(lowLeft.x, lowLeft.y);
		context.lineTo(highRight.x, highRight.y);

		context.moveTo(lowRight.x, lowRight.y);
		context.lineTo(highLeft.x, highLeft.y);
		
		context.stroke();
	},
	drawBoard: function (context, size){
		context.beginPath();
		context.lineWidth = 5;
		context.strokeStyle = '#000';
		context.moveTo(size / 3, 0);
		context.lineTo(size / 3, size);
		context.moveTo(2 * size / 3, 0);
		context.lineTo(2 * size / 3, size);

		context.moveTo(0, size / 3);
		context.lineTo(size, size / 3);
		context.moveTo(0, 2 * size / 3);
		context.lineTo(size, 2 * size / 3);

		context.stroke();
	},
	clearBoard: function (context){
		context.clearRect(0, 0, 300, 300);
	}
}