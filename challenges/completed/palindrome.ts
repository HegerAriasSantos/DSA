/**
 * It takes a string, removes all non-alphanumeric characters, removes all spaces, converts the string
 * to lowercase, and then checks if the string is equal to the reverse of the string.
 * @param str - the string to be checked
 * @returns A boolean value.
 */
function palindrome(str:string) {
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
