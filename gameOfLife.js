/**
 * These example boards represent the row and column of live cells, where an empty array
 * represents an empty row. Feel free to keep this data structure or change it to something
 * that works better for you.
 */
//used this website for reference https://playgameoflife.com/
export const BLOCK_BOARD = [[0], [1, 1], [1, 1], [0]];
export const BLOCK_BOARD_RESULT = [[0], [1, 1], [1, 1], [0]];

export const BLINKER_BOARD = [
	[0, 1, 0],
	[0, 1, 0],
	[0, 1, 0],
];
export const BLINKER_BOARD_RESULT = [
	[0, 0, 0],
	[1, 1, 1],
	[0, 0, 0],
];

export const Rando_BOARD = [
	[1, 1, 0],
	[0, 1, 1],
	[1, 1, 1],
	[0, 1, 1],
];
//based on the game, expected output is the following
export const Rando_BOARD_RESULT = [
	[1, 1, 1],
	[0, 0, 0],
	[1, 0, 0],
	[1, 0, 1],
];

//generates the next generation of cells
export function getNextGeneration(inputBoard) {
	const outputBoard = inputBoard;

	//creating a grid through the arrays
	let rows = inputBoard.length;
	let columns = inputBoard[0].length;

	//duplicate the inputBoard to manipulate while having the original as a reference
	let outputBoardCopy = JSON.parse(JSON.stringify(inputBoard));

	//for future development - take out this variable function from the getNextGeneration function to test game rules
	const checkNeighboringcell = (row, col) => {
		//radius holds the indexes of the neighboring cells we want to check
		let cellRadius = [-1, 0, 1];
		//
		let count = 0;
		//loops through the grid created by the array of arrays; nested for loops, so for further development, it may be a good idea to look into refactoring the code to get rid of them
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (
					!(cellRadius[i] === 0 && cellRadius[j] === 0) &&
					outputBoardCopy[row + cellRadius[i]] &&
					outputBoardCopy[row + cellRadius[i]][col + cellRadius[j]]
				) {
					let neighbor =
						outputBoardCopy[row + cellRadius[i]][col + cellRadius[j]];
					if (neighbor === 1) {
						count++;
					}
				}
			}
		}
		return count;
	};

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			const count = checkNeighboringcell(i, j);
			//if there exists a live cell
			if (outputBoardCopy[i][j] === 1) {
				//Any live cell with two or three live neighbors lives on to the next generation
				//Any live cell with more than three live neighbors dies (overpopulation)
				if (count < 2 || count > 3) {
					//Any live cell with fewer than two live neighbors dies (underpopulation)
					outputBoard[i][j] = 0;
				}
				//if the cell is dead
			} else {
				//Any dead cell with exactly three live neighbors becomes a live cell (reproduction)
				if (count === 3) {
					outputBoard[i][j] = 1;
				}
			}
		}
	}
	return outputBoard;
}
console.log(getNextGeneration(Rando_BOARD));
console.log(getNextGeneration(BLOCK_BOARD));
console.log(getNextGeneration(BLINKER_BOARD));
