function descending_order(arr = []) {
    return arr.sort((num1, num2) => num2 - num1);
}

console.log(descending_order([5, 2, 8, 3, 9]));