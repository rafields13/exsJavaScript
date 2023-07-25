function comecaComA(lista = []) {
    qntd = 0

    for (let i in lista) {
        if (lista[i].startsWith('A') || lista[i].startsWith('a')) {
            qntd++
        }
    }

    return qntd
}

console.log(comecaComA(['Apareceu', 'Aoba', 'Opa']))