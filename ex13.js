function filterSize(array = []) {
    result = [];

    for (let i in array) {
        if (array[i].length >= 5) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(filterSize(['javacript', 'go', 'react', 'node']));