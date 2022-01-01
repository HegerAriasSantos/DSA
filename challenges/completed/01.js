/*       Maximum Non Adjacent Sum

Hi, here's your problem today. This problem was recently asked by Google:

Given a list of positive numbers, find the largest possible set such that no elements are adjacent numbers of each other.

Here's some example and some starter code

def maxNonAdjacentSum(nums):
  # Fill this in.
  
print(maxNonAdjacentSum([3, 4, 1, 1]))
# 5
# max sum is 4 (index 1) + 1 (index 3)

print(maxNonAdjacentSum([2, 1, 2, 7, 3]))
# 9
# max sum is 2 (index 0) + 7 (index 3)
*/

function maxNonAdjacentSum(arr) {
	let interatorTarget = 0;
	let maxPositions = [0, 0];
	let maxSum = 0;
	while (true) {
		if (interatorTarget + 2 === arr.length + 1) break;
		for (let i = interatorTarget + 2; i < arr.length; i++) {
			if (maxSum < arr[interatorTarget] + arr[i]) {
				maxSum = arr[interatorTarget] + arr[i];
				maxPositions = [interatorTarget, i];
			}
		}
		interatorTarget++;
	}
	return `${maxSum} \nmax sum is ${arr[maxPositions[0]]} (index ${
		maxPositions[0]
	}) + ${arr[maxPositions[1]]} (index ${maxPositions[1]})`;
}

console.log(
	maxNonAdjacentSum([
		2, 1, 2, 7, 3, 1, 23, 1, 5, 6, 20, 19, 18, 20, 90, 11, 4, 15, 13, 5, 16, 2,
	]),
);
