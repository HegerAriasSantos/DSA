// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
	let romans = {
		1: "I",
		4: "IV",
		5: "V",
		9: "IX",
		10: "X",
		40: "XL",
		50: "L",
		90: "XC",
		100: "C",
		400: "CD",
		500: "D",
		900: "CM",
		1000: "M",
	};

	let romansNumber = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
	let pointer = romansNumber.length - 1;
	let result = "";

	while (num !== 0) {
		if (num >= romansNumber[pointer]) {
			num -= romansNumber[pointer];
			result += romans[romansNumber[pointer]];
		} else {
			pointer--;
		}
	}

	return result;
}

console.log(convertToRoman(3999));
