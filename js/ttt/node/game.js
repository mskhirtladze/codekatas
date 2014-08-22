var GameState = require('./game-state');

var Game = function (initalMark) {

	var emptyBoard = function() {
		return [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		];
	}

	if(initalMark && initalMark !== 'X' && initalMark !== 'O')
		throw 'Unrecognized mark!'

	var board = emptyBoard();

	this.state = GameState.Idle;

	var activeMark = initalMark || 'X';

	this.getBoard = function () {
		return board;
	}

	this.placeMark = function (row, col) {
		if (board[row][col] !== '') {
			throw "Illegal move";
		}
		if (this.state !== GameState.Idle) {
			throw "game over";
		}
		board[row][col] = activeMark;
		switchMark();

		checkRowWin.call(this);
		checkColumnWin.call(this);
		checkDiagonalWin.call(this);
		checkDraw.call(this);
	}

	this.restart = function(){
		board = emptyBoard();
		this.state = GameState.Idle;
	}

	var checkDiagonalWin = function () {
		if (board[0][0] === board[1][1]
			&& board[0][0] === board[2][2]
			&& board[0][0] !== "")
			detectWinner.call(this, board[0][0]);

		if (board[0][2] === board[1][1]
			&& board[0][2] === board[2][0]
			&& board[0][2] !== "")
			detectWinner.call(this, board[0][2]);
	}

	var checkColumnWin = function () {
		for (var column = 0; column < 3; column++) {
			if (board[0][column] === board[1][column]
				&& board[0][column] === board[2][column]
				&& board[0][column] !== "")
				detectWinner.call(this, board[0][column]);
		}
	}

	var checkRowWin = function () {
		for (var row = 0; row < 3; row++) {
			if (board[row][0] === board[row][1]
				&& board[row][0] === board[row][2]
				&& board[row][0] !== "")
				detectWinner.call(this, board[row][0]);
		}
	}

	var checkDraw = function () {
		for(var row in board){
			for(var col in board[row]){
				if (board[row][col] === "") {
					return;
				}
			}
		}
		this.state = GameState.Draw;
	}

	var detectWinner = function(mark){
		if (mark === "X") {
			this.state = GameState.XWon;
		} else {
			this.state = GameState.OWon;
		}
	}

	var switchMark = function () {
		if(activeMark === 'X'){
			activeMark = 'O';
		} else
			activeMark = 'X';
	}
}

module.exports = Game;	