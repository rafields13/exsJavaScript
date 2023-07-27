function maiorIdade(lista = []) {
    deMaior = []

    for (i in lista) {
        if (lista[i].Idade >= 18) {
            deMaior.push(lista[i])
        }
    }

    return deMaior
}

console.log(maiorIdade([
    {Nome: 'João', Idade: 30},
    {Nome: 'Maria', Idade: 18},
    {Nome: 'Pedro', Idade: 14}
]))