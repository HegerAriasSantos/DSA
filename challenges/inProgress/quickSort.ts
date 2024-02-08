function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  const middleNumber = arr[Math.round(arr.length / 2)];
  const less = arr.filter((x) => x < middleNumber);
  const greater = arr.filter((x) => x > middleNumber);
  return quickSort(less).concat([middleNumber], quickSort(greater));
}
console.log(quickSort([10, 5, 2, 3]));
