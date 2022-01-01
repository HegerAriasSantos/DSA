function bubbleSort(arr) {
	// loop to access each array element
	for (let i = 0; i < arr.length - 1; i++) {
		// loop to compare array elements
		for (let j = 0; j < arr.length - i - 1; j++) {
			// compare two adjacent elements
			// change > to < to sort in descending order
			if (arr[j] > arr[j + 1]) {
				// swapping occurs if elements
				// are not in the intended order
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

let arrExample = [4, 2, 2, 8, 2, 23, 4, 1, 6, 5, 7, 9, 10, 1, 2, 3, 4, 3, 3, 1];

console.time(`start`);
console.log(bubbleSort(arrExample));
console.timeEnd(`start`);
