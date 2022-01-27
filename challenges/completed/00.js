/*
    input: [1,3,5]
    target: 4
    output: [0,1]
*/
function Main(arr, target) {
	let targetIteration = 0;
	while (true) {
		if (targetIteration === arr.length - 1) return false;
		for (let i = targetIteration + 1; i < arr.length; i++) {
			if (arr[targetIteration] + arr[i] == target) {
				return [targetIteration, i];
			}
		}
		targetIteration++;
	}
}
console.time("start");
console.log(
	Main(
		[
			2, 7, 11, 2, 5, 9, 20, 60, 90, 1, 5, 6, 16, 6, 16, 16, 16, 6, 61, 61, 41,
			4, 4, 415, 25, 26, 26, 1, 15,
		],
		419,
	),
);
console.timeEnd("start");
