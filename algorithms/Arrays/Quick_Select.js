/*Quick Select is a variation of the quicksort algorithm. It is an optimized way to find the kth smallest/largest element in an unsorted array.

Algorithm:

The partition part of the algorithm is same as that of quick sort.

After the partition function arranges the elements in list according to the pivot and returns the pivot_index, instead of recursing both sides of the pivot index, we recurse only for the part that contains our desired element */

class Quick_Select {
	constructor(arr, k) {
		this.items = arr;
		this.k = k;
		this.start = 0;
		this.end = arr.length - 1;
	}
	random(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
	partition(start, end) {
		let pivot_ind = this.random(start, end);
		let pivot = this.items[pivot_ind];
		let pindex = start;
		[this.items[end], this.items[pivot_ind]] = [
			this.items[pivot_ind],
			this.items[end],
		];

		for (let i = 0; i < end; i++) {
			if (this.items[i] > pivot) {
				[this.items[i], this.items[pindex]] = [
					this.items[pindex],
					this.items[i],
				];
				pindex++;
			}
			[this.items[end], this.items[pindex]] = [
				this.items[pindex],
				this.items[end],
			];
		}

		return pindex;
	}

	quickSelect(start, end) {
		if (start <= end) {
			let pindex = this.partition(start, end);
			if (pindex > this.k) return this.quickSelect(start, pindex - 1);
			else if (pindex < this.k) return this.quickSelect(pindex + 1, end);
			else return this.items[this.k];
		}
	}
}

const solution = new Quick_Select([1, 2, 3, 4, 5, 6], 4);

console.log(solution.quickSelect(0, solution.items.length - 1));
