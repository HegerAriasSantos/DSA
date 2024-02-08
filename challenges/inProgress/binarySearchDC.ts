function binarySearchDC(list: number[], target: number): number {
  if (list.length === 1) return index;
  const middleIndex = Math.round(list.length / 2);
  if (target > list[index])
    return binarySearchDC(list.slice(middleIndex, list.length - 1), target);
  if (target < list[index])
    return binarySearchDC(list.slice(0, Math.round(list.length / 2)), target);

  return 0;
}

console.log(
  binarySearchDC([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 12)
);
