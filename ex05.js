function isPair(lista = []) {
    pares = []

    for (let i in lista) {
        if (lista[i] % 2 == 0) {
            pares.push(lista[i])
        }
    }

    return pares
}

console.log(isPair([5, 2, 3, 7, 6, 8, 11]))