function perfectSquare(number) {
    if (number < 0 || isNaN(number)) {
		return false;
	}

	let squareRoot = Math.sqrt(number);

    return squareRoot === Math.floor(squareRoot);
}

console.log(perfectSquare(25));