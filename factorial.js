let inputValue = document.getElementById('input-value');
let result = document.getElementById('result');

let userValue = inputValue.value;

const calculateButton = document.getElementById('calculate-button');


calculateButton.onclick = calculateFactorial;

function calculateFactorial(userValue){
    
    if(userValue !== 1){
        result.innerText = userValue*(calculateFactorial(userValue-1));
    }else{
        return 1;
    }

    return result.innerText;
}

//console.log(calculateFactorial(4));