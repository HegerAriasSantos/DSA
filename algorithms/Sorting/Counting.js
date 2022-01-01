function sortCounting(arr) {
	let output = new Array(arr.length + 1);
	let size = arr.length;

	// find the longest number
	let max = Math.max(...arr);

	// Initialize count array with all zeros.
	let count = new Array(max + 1).fill(0);

	// Store the count of each element
	for (let i = 0; i < size; i++) {
		count[arr[i]]++;
	}

	// Store the cummulative count of each array
	for (let i = 1; i <= max; i++) {
		console.log(count[i], " + ", count[i - 1]);
		count[i] += count[i - 1];
	}

	// Find the index of each element of the original array in count array, and
	// place the elements in output array
	for (let i = size - 1; i >= 0; i--) {
		output[count[arr[i]] - 1] = arr[i];
		count[arr[i]]--;
	}

	// copy the output in the original array
	for (let i = 0; i <= size; i++) {
		if (arr[i]) arr[i] = output[i];
	}
	return arr;
}

let arrExample = [4, 2, 2, 8, 2, 23, 4, 1, 6, 5, 7, 9, 10, 1, 2, 3, 4, 3, 3, 1];

console.time(`start`);
console.log(sortCounting(arrExample));
console.timeEnd(`start`);

/*
Overall complexity = O(max)+O(size)+O(max)+O(size) = O(max+size)

Worst Case Complexity: O(n+k)
Best Case Complexity: O(n+k)
Average Case Complexity: O(n+k)


in this case n = 21, k =23 




----Counting Sort Applications-----
Counting sort is used when:

there are smaller integers with multiple counts.
linear complexity is the need.

*/
