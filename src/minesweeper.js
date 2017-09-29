const generatePlayerBoard = (numberOfRows,numberOfColumns)=>{
	let board =[];
	for(let rowNum =0; rowNum < numberOfRows; rowNum++){
		let row =[];
		for(let columnNum = 0; columnNum < numberOfColumns; columnNum++){

			row.push(' ');

		}
		board.push(row);
	}
	return board;

}; 

//console.log(generatePlayerBoard(7,3));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>{
	let board =[];
	for(let rowNum =0; rowNum < numberOfRows; rowNum++){
		let row =[];
		for(let columnNum = 0; columnNum < numberOfColumns; columnNum++){

			row.push(null);

		}
		board.push(row);
	}


	let numberOfBombsPlaced = 0;

	while(numberOfBombsPlaced < numberOfBombs){
		//An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.


		// Generate a random row index
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		// Place the bomb at that row and columns
		board[randomRowIndex][randomColumnIndex] = 'B';
		// Increment numberOfBombsPlaced
		numberOfBombsPlaced++;
	}

	return board;

};


const printBoard = (board)=>{
	console.log(board.map(row=>row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

