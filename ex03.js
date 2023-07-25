function media(lista = []) {
    soma = 0

    for (let i in lista) {
        soma += lista[i]
    }

    return soma / lista.length
}

console.log(media([5, 4, 6, 7, 10]))