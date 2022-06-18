/*
3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'
*/
const getWordStructure = function (word) {
    if (!isNaN(word)){
        console.log('Недопустимые символы, введите слово');
    }
    else { 
    let vowels = /[aeiou]/g;
    let constantas = /[qwrtpsdfghjklzxcvbnm]/g;
    let wordLow = word.toLowerCase();
    let vowelsCount = wordLow.match(vowels).length;
    let constantasCount = wordLow.match(constantas).length;
    console.log(`В слове ${wordLow}: гласных букв ${vowelsCount}; согласных букв ${constantasCount}.`);
    }
}
getWordStructure('case2');
getWordStructure(3);
getWordStructure('');
getWordStructure('Case');
getWordStructure('Check-list');
getWordStructure('Check list');
getWordStructure('Check list');

//   ^^   //
