var assert = require('../../unit-testing/assert');
var testRunner = require('../../unit-testing/runner');
var Game = require('./game');
var GameState = require('./gameState');

var arrayEqual = function(a1, a2) {
	if(a1.length !== a2.length)
		return false;

	for(var i in a1){
		if(a1[i] !== a2[i]){
			return false;
		}
	}

	return true;
}

testRunner.run({
	game_should_have_empty_board: function(){
		var game = new Game();

		assert.equal(['', '', '', '', '', '', '', '', ''], game.getBoard(), arrayEqual);
	},
	first_play_should_be_X: function(){
		var game = new Game();

		game.play(0, 0);

		assert.equal(['X', '', '', '', '', '', '', '', ''], game.getBoard(), arrayEqual);
	},
	second_play_should_be_O: function(){
		var game = new Game();

		game.play(0,0);
		game.play(0,1);

		assert.equal(['X', 'O', '', '', '', '', '', '', ''], game.getBoard(), arrayEqual);
	},
	inital_mark_should_be_optional: function(){
		var game = new Game('O');

		game.play(0, 0);

		assert.equal(['O', '', '', '', '', '', '', '', ''], game.getBoard(), arrayEqual);
	},
	same_location_is_illegal: function(){
		var game = new Game();

		game.play(0, 0);

		var e = assert.throw(function(){
			game.play(0,0);
		});

		assert.equal('same move', e);
	},
	on_restart_reset_board: function(){
		var game = new Game();

		game.play(0, 0);
		game.restart();

		assert.equal(['', '', '', '', '', '', '', '', ''], game.getBoard(), arrayEqual);
	},
	detect_row_win: function(){
		var game = new Game();

		game.play(0, 0);
		game.play(1, 0);
		game.play(0, 1);
		game.play(1, 1);
		game.play(0, 2);

		assert.equal(['X', 'X', 'X', 'O', 'O', '', '', '', ''], game.getBoard(), arrayEqual);
		assert.equal(GameState.XWon, game.getState());		
	},
	unfinished_game_is_in_idle_state: function(){
		var game = new Game();

		game.play(0, 0);
		game.play(1, 0);
		game.play(0, 1);
		game.play(1, 1);

		assert.equal(['X', 'X', '', 'O', 'O', '', '', '', ''], game.getBoard(), arrayEqual);
		assert.equal(GameState.Idle, game.getState());		
	},
	detect_row_win_by_O: function(){
		var game = new Game('O');

		game.play(0, 0);
		game.play(1, 0);
		game.play(0, 1);
		game.play(1, 1);
		game.play(0, 2);

		assert.equal(['O', 'O', 'O', 'X', 'X', '', '', '', ''], game.getBoard(), arrayEqual);
		assert.equal(GameState.OWon, game.getState());
	},
	detect_column_win: function(){
		var game = new Game();

		game.play(0, 0);
		game.play(0, 1);
		game.play(1, 0);
		game.play(1, 1);
		game.play(2, 0);

		assert.equal(['X', 'O', '', 'X', 'O', '', 'X', '', ''], game.getBoard(), arrayEqual);
		assert.equal(GameState.XWon, game.getState());
	},
	detect_diagonal_win: function(){
		var game = new Game();

		game.play(0, 0);
		game.play(0, 1);
		game.play(1, 1);
		game.play(0, 2);
		game.play(2, 2);

		assert.equal(['X', 'O', 'O', '', 'X', '', '', '', 'X'], game.getBoard(), arrayEqual);
		assert.equal(GameState.XWon, game.getState());
	},
	detect_draw: function(){
		var game = new Game();

		game.play(0, 0);
		game.play(1, 1);
		game.play(0, 2);
		game.play(0, 1);
		game.play(2, 1);
		game.play(2, 2);
		game.play(2, 0);
		game.play(1, 0);
		game.play(1, 2);

		assert.equal(GameState.Draw, game.getState());
	}
})