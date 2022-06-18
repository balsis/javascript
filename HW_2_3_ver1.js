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
    let vowels = 0;
    let constantas = 0;
    let word1 = word.replace("-", '');
    let word2 = word1.replace(" ", '');
    let word3 = word2.toLowerCase();
    let word4 = word3.replace(/[^a-z]/g,'')  // где-то в этом моменте пришлось упороться по регулярным выражениям и пришло понимание, как сделать нормально ^^
    let symbols = word4.split(''); 
    for (i = 0; i < symbols.length; i++){
    //console.log(symbols[i]);       
        if (symbols[i] === 'a' || symbols[i] === 'e'|| symbols[i] === 'i'|| symbols[i] === 'o'|| symbols[i] === 'u') {
            vowels++;   
        } else {
            constantas++;    
        }          
    }
    console.log(`В слове ${word}: гласных букв ${vowels}; согласных букв ${constantas}.`);
    return vowels && constantas;
    }    
}


getWordStructure('case2');
getWordStructure(3);
getWordStructure('');
getWordStructure('Case');
getWordStructure('Check-list');
getWordStructure('Check list');
getWordStructure('Check list');
