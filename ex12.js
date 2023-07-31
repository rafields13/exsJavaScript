function replace_vowels(str = '') {
    // É importante lembrar que sempre deve-se atualizar o valor da variável, como nas linhas 3 e 7. Se não, o programa não funcionará.
    str = str.toLowerCase();

    for (let i in str) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            str = str.replace(str[i], '*');
        }
    }

    return str;
}

console.log(replace_vowels('Rafael'));