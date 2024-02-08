// basicly the selection sort is look for the longest or smallest from an array and take it to other array and repeat.

const findSmallest = (arr: number[]) => {
  let smallestIndex = 0;
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallestIndex = i;
      smallest = arr[i];
    }
  }
  return smallestIndex;
};

export const selectionSort = (arr: number[]) => {
  const newArray = [];
  let copyArr = [...arr];
  for (let i = 0; i < arr.length; i++)
    newArray.push(...copyArr.splice(findSmallest(copyArr), 1));
  return newArray;
};

const arr = [10, 5, 3, 6, 8, 2, 9];
console.log(selectionSort(arr));
