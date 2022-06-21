/*
4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/
const palindrome = function(word) {
    let word2 = word.toLowerCase();
    if (word2===word2.split('').reverse().join('')){
        //console.log(word2);
        console.log(`yes, the word '${word}' is a palindrome`);
    }
    else {
        console.log(`no, the word '${word}' isn't a palindrome`);
    }

}

palindrome('Abba');
palindrome('abba');
palindrome('abBba');
palindrome('abABba');

//   ^^   //
