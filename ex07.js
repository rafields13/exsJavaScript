function ordenarNumeros(array = []) {
    return array.sort((a, b) => a - b);
  }

  console.log(ordenarNumeros([1, 4, 6, 2, 7, 9]))