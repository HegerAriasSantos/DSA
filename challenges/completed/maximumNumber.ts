function maximumNumber(list: number[], max = 0): number {
  for (let i = 0; i < list.length; i++) max = list[i] > max ? list[i] : max;
  return max;
}
const maximumNumberRecursive = (list: number[] = [], max = 0): number =>
  list.length <= 0
    ? max
    : maximumNumberRecursive(
        list.slice(0, list.length - 1),
        (max = list[list.length - 1] > max ? list[list.length - 1] : max)
      );
console.log(maximumNumberRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
