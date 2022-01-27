function palindrome(str) {
	let strReverse = "";
	str = str.replace(/[^1-9]+/g, "");
	str = str.replace(/\s+/g, "");
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		strReverse += str[str.length - 1 - i];
	}
	return str === strReverse ? true : false;
}
palindrome("1 eye for of 1 eye.");
