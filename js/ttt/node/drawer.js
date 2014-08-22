exports.drawMatrix = function(matrix){
    var board = '\n';
    for(var row in matrix){
        for(var col in matrix[row]){
            switch(matrix[row][col]) {
                case '': board += ' '; break;
                case 'X': board += 'X'; break;
                case 'O': board += 'O'; break;
            }
            if(col < 2) board += '|';
        }

        if(row < 2) board += '\n-----\n';
    }
    board += '\n';

    console.log(board);
}