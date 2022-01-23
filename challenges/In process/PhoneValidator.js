function telephoneCheck(str) {
	let numbers = str.replace(/[0-9]/g, "5");
	let numbersa = str.replace(/[^0-9]/g, "");
	if (numbersa.length == 11) {
		if (numbersa[0] != 1) return false;
	}

	let variants = [
		"555-555-5555",
		"(555)555-5555",
		"(555) 555-5555",
		"555 555 5555",
		"5555555555",
		"5 555 555 5555",
		"5(555)555-5555",
		"5 555-555-5555",
		"5 (555) 555-5555",
	];
	for (let i = 0; i < variants.length; i++) {
		if (numbers === variants[i]) return true;
	}
	return false;
}

console.log(telephoneCheck("(6054756961)"));
