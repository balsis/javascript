/*
2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
*/
//__________________________________________________________________________________________

const checkAge = function(age_1) { 
    let age_2 = 18;
    let age_3 = 60;
    
    if (typeof age_1 !='number'){
    console.log('Warning! Enter a numeric value!');
    }
else if (age_1 < age_2){
    console.log(`You don’t have access because your age is ${age_1}. It’s less then`);
}
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome!');
}else if (age_1 > age_3){
    console.log('Keep calm and look Culture channel');
}else{
    console.log('Technical work');
}
    }

    checkAge('hello');
    checkAge('10');
    checkAge(10);
    checkAge(18);
    checkAge(61);
    
//   ^^   //