'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
	var board = [];
	for (var rowNum = 0; rowNum < numberOfRows; rowNum++) {
		var row = [];
		for (var columnNum = 0; columnNum < numberOfColumns; columnNum++) {

			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

//console.log(generatePlayerBoard(7,3));

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
	var board = [];
	for (var rowNum = 0; rowNum < numberOfRows; rowNum++) {
		var row = [];
		for (var columnNum = 0; columnNum < numberOfColumns; columnNum++) {

			row.push(null);
		}
		board.push(row);
	}

	var numberOfBombsPlaced = 0;

	while (numberOfBombsPlaced < numberOfBombs) {
		//An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.


		// Generate a random row index
		var randomRowIndex = Math.floor(Math.random() * numberOfRows);
		var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		// Place the bomb at that row and columns
		board[randomRowIndex][randomColumnIndex] = 'B';
		// Increment numberOfBombsPlaced
		numberOfBombsPlaced++;
	}

	return board;
};

var printBoard = function printBoard(board) {
	console.log(board.map(function (row) {
		return row.join(' | ');
	}).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);