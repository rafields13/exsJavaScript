function reverseString(text = '') {
    return text.split('').reverse().join('')
}

function isPalindrome(str = '') {
    rts = reverseString(str)

    if (str == rts) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('leafar'))