/*
The Euclidean Algorithm is one of the oldest numerical algorithms still in use today. Attributed to ancient Greek mathematician Euclid in his book “Elements” written approximately 300 BC, the algorithm serves as an effective method for finding the greatest common divisor of two whole numbers.

The greatest common divisor (GCD) of two whole numbers is the largest natural number that divides evenly into both without a remainder.
*/

// Let’s find the GCD of 1015 and 231

// without the algorithm

function GCDWithoutAlgorithm(A, B) {
	const DivisblesCommons = [];
	const limit = A > B ? A : B;
	for (let i = 0; i < limit; i++) {
		if (A % i == 0 && B % i == 0) DivisblesCommons.push(i);
	}
	return Math.max(...DivisblesCommons);
}

// console.time("No algo");
// GCDWithoutAlgorithm(1234567121, 92121);
// console.timeEnd("No algo");

// With algorithm

function GCD(a, b) {
	// base cases
	if (a === 0) {
		return b;
	}
	if (b === 0) {
		return a;
	}

	// decrease and conqure - recursion
	return GCD(b, a % b);
}

console.time("Algo");
GCD(1234567121231, 9212121);
console.timeEnd("Algo");
