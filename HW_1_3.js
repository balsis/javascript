/*
3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
*/
//__________________________________________________________________________________________

const checkAge = function(age_1) { 
    let age_2 = 18;
    let age_3 = 60;
    
    if (isNaN(age_1)){
        if (age_1==2 && typeof(age_1)==String){
            console.log(`You don’t have access because your age is ${age_1}. It’s less then`);
        }
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

    checkAge('');
    checkAge('2');
    checkAge('17');
    checkAge(18);
    checkAge(61);
    checkAge('hello');
    
//   ^^   //