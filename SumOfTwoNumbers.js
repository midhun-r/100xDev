function SumOfTwoNumbers(number1, number2) {
    return number1+number2;
}

function SumInPrettyFormat(number1,number2,fn) {
    console.log("The Sum of "+number1+" and "+number2+" is "+fn(number1,number2)+".");
}

function SumInPassiveTense(number1,number2,fn) {
    console.log("The numbers "+number1+" and "+number2+" were summed. Their sum is "+fn(number1,number2)+".");
}

function SumBetweenTwoNumbers(startIndex,stopIndex) {
    let sum = 0;
    for(let i = startIndex; i<=stopIndex; i++){
        sum +=i;
    }
    console.log("The sum of Natural Numbers from "+startIndex+" to "+stopIndex+" is "+sum+".");
}

SumInPrettyFormat(1,2,SumOfTwoNumbers);  //The Sum of 1 and 2 is 3.
SumInPassiveTense(14,11,SumOfTwoNumbers); //The numbers 14 and 11 were summed. Their sum is 25.
SumBetweenTwoNumbers(1,100); //The sum of Natural Numbers from 1 to 100 is 5050.gi
