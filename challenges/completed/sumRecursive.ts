function sumRecursive(sum: number, list: number[] = []): number {
  if (list.length <= 0 && sum === 0) return 0;
  return sum + sumRecursive(list.pop() ?? 0, list);
}

console.log(sumRecursive(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
