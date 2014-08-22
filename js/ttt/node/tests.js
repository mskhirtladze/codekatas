var assert = require('../../unit-testing/assert');
var assertEqual = assert.equal;
var assertThrow = assert.throw;
var Game = require('./game.js');
var GameState = require('./game-state.js');

var matrixEqual = function  (m1, m2) {
	for(var row in m1){
		for(var column in m1[row]){
			if(m1[row][column] !== m2[row][column])
				return false;
		}
	}

	return true;
}

var runTests = require('../../unit-testing/runner').run;

runTests({
	game_should_start_with_empty_board: function(){
		var game = new Game();
		var expectedBoard = [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		];
		assertEqual(expectedBoard, game.getBoard(), matrixEqual);
	},
	first_placed_mark_should_be_X: function () {
		var game = new Game();
		game.placeMark(0, 0);

		assertEqual([
			['X', '', ''],
			['', '', ''],
			['', '', ''],
		], game.getBoard(), matrixEqual);
	},
	second_placed_mark_should_be_O: function () {
		var game = new Game();
		game.placeMark(0, 0);
		game.placeMark(0, 1);

		assertEqual([
			['X', 'O', ''],
			['', '', ''],
			['', '', ''],
		], game.getBoard(), matrixEqual);
	},
	game_should_allow_setting_initial_mark: function(){
		var game = new Game('O');
		game.placeMark(0, 0);

		assertEqual([
			['O', '', ''],
			['', '', ''],
			['', '', ''],
		], game.getBoard(), matrixEqual);
	},
	game_should_take_only_X_or_O: function (){
		var e = assertThrow(function() {
			var game = new Game("A");
		});
		assertEqual("Unrecognized mark!", e);
	},
	game_should_not_allow_same_move: function(){
		var game = new Game();
		game.placeMark(0, 0);

		var e = assertThrow(function() {
			game.placeMark(0, 0);
		});

		assertEqual('Illegal move', e);
	},
	detect_first_row_win: function () {
		var game = new Game();

		game.placeMark(0, 0);
		game.placeMark(1, 0);
		game.placeMark(0, 1);
		game.placeMark(1, 1);
		game.placeMark(0, 2);

		assertEqual(GameState.XWon, game.state)
	},
	unfinished_game_has_idle_state: function(){
		var game = new Game();
		game.placeMark(0, 0);

		assertEqual(GameState.Idle, game.state)
	},
	detect_second_row_win: function () {
		var game = new Game();

		game.placeMark(1, 0);
		game.placeMark(0, 0);
		game.placeMark(1, 1);
		game.placeMark(0, 1);
		game.placeMark(1, 2);

		assertEqual(GameState.XWon, game.state)
	},
	detect_row_win_for_O: function () {
		var game = new Game('O');

		game.placeMark(1, 0);
		game.placeMark(0, 0);
		game.placeMark(1, 1);
		game.placeMark(0, 1);
		game.placeMark(1, 2);

		assertEqual(GameState.OWon, game.state)
	},
	detect_column_win: function() {
		var game = new Game();

		game.placeMark(0, 0);
		game.placeMark(0, 1);
		game.placeMark(1, 0);
		game.placeMark(1, 1);
		game.placeMark(2, 0);

		assertEqual(GameState.XWon, game.state)
	},
	game_should_not_allow_move_except_idle: function(){
		var game = new Game();

		game.placeMark(0, 0);
		game.placeMark(0, 1);
		game.placeMark(1, 0);
		game.placeMark(1, 1);
		game.placeMark(2, 0);

		var e = assertThrow(function() {
			game.placeMark(2, 2);
		});
		assertEqual('game over', e);
	},
	detect_diagonal_win: function() {
		var game = new Game();

		game.placeMark(0, 0);
		game.placeMark(0, 1);
		game.placeMark(1, 1);
		game.placeMark(1, 2);
		game.placeMark(2, 2);

		assertEqual(GameState.XWon, game.state);
	},
	restart_should_reset_board: function(){
		var game = new Game();
		game.placeMark(0, 0);
		game.restart();

		assertEqual([
			['', '', ''],
			['', '', ''],
			['', '', ''],
		], game.getBoard(), matrixEqual);
	},
	restart_should_reset_state_to_idle: function(){
		var game = new Game();

		game.placeMark(0, 0);
		game.placeMark(0, 1);
		game.placeMark(1, 1);
		game.placeMark(1, 2);
		game.placeMark(2, 2);

		game.restart();

		assertEqual(GameState.Idle, game.state);
	},
	detect_draw: function(){
		var game = new Game();

		game.placeMark(0, 0);
		game.placeMark(1, 1);
		game.placeMark(0, 2);
		game.placeMark(0, 1);
		game.placeMark(2, 1);
		game.placeMark(2, 2);
		game.placeMark(2, 0);
		game.placeMark(1, 0);
		game.placeMark(1, 2);

		assertEqual(GameState.Draw, game.state);
	}
});