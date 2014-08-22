var GameState = require('./gameState');

var Game = function(mark) {
	var board = ['', '', '', '', '', '', '', '', ''];
	var activeMark = mark || 'X';

	var swapMark = function(){
		if(activeMark === 'X')
			activeMark = 'O';
		else 
			activeMark = 'X';
	}
	var extractWinner = function(mark){
		if(mark === 'X'){
			return GameState.XWon;
		} else
			return GameState.OWon;
	}
	var checkRowWin = function (){
		for (var row = 0; row < 3; row++) {
			var i = row * 3;
			if(board[i] !== ''
				&& board[i] === board[i + 1]
				&& board[i] === board[i + 2])				
				return extractWinner(board[i])
		};

		return GameState.Idle;
	}
	var checkColumnWin = function (){
		for (var col = 0; col < 3; col++) {
			var i = col;
			if(board[i] !== ''
				&& board[i] === board[i + 3]
				&& board[i] === board[i + 6])				
				return extractWinner(board[i])
		};

		return GameState.Idle;
	}

	var checkDiagonalWin = function(){
		if(board[0] !== ''
				&& board[0] === board[4]
				&& board[0] === board[8])				
				return extractWinner(board[0]);

		if(board[2] !== ''
				&& board[2] === board[4]
				&& board[2] === board[6])				
				return extractWinner(board[2])

		return GameState.Idle;
	}

	var checkDraw = function(){
		for (var i = 0; i < board.length; i++){
			if(board[i] === '')
				return GameState.Idle;
		}

		return GameState.Draw;
	}

	this.getBoard = function(){
		return board;
	}
	this.play = function(x, y){
		if(board[x*3 + y] !== ''){
			throw 'same move';
		}

		board[x*3 + y] = activeMark;
		swapMark();
	}
	this.restart = function(){
		board = ['', '', '', '', '', '', '', '', ''];
	}
	this.getState = function(){
		var state = GameState.Idle;

		state = checkRowWin();
		if(state !== GameState.Idle)
			return state;

		state = checkColumnWin();
		if(state !== GameState.Idle)
			return state;

		state = checkDiagonalWin();
		if(state !== GameState.Idle)
			return state;

		return checkDraw();
	}
}

module.exports = Game;