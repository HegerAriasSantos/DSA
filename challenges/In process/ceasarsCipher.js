// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
	let alphabeticIndex = {
		a: "n",
		b: "o",
		c: "p",
		d: "q",
		e: "r",
		f: "s",
		g: "t",
		h: "u",
		i: "v",
		j: "w",
		k: "x",
		l: "y",
		m: "z",
		n: "a",
		o: "b",
		p: "c",
		q: "d",
		r: "e",
		s: "f",
		t: "g",
		u: "h",
		v: "i",
		w: "j",
		x: "k",
		y: "l",
		z: "m",
		".": ".",
		"!": "!",
		"?": "?",
		",": ",",
	};
	let result = "";
	for (let i = 0; i < str.length; i++) {
		if (alphabeticIndex[str[i].toLowerCase()]) {
			result += alphabeticIndex[str[i].toLowerCase()];
			continue;
		}
		result += " ";
	}
	return result.toUpperCase();
}
console.log(rot13("SERR CVMMN!"));

