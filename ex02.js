function maiorNumero(lista = []) {
    maior = [0]

    for (let i in lista) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    } 

    return maior
}

console.log(maiorNumero([10, 3, 6, 7, 4]))