let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let bodyMassOutput = document.getElementById('bodymass-id');
let bodyMassComment = document.getElementById('comment-id');
let resultsDiv = document.getElementById('results-div');

const bodyMassButton = document.getElementById('calculate-button');
const resetButton = document.getElementById('reset-button');


bodyMassButton.onclick = calculatebodyMassOutput;

resetButton.addEventListener('click', clearButton);




function calculatebodyMassOutput(){

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if(!height || !weight || height<0 || weight<0){
        alert("Please enter valid values");
    }

    let bmi = weight/(height ** 2).toFixed(2);

    bodyMassOutput.innerText = bmi;
 

    if(bmi < 18.5){
        bodyMassComment.innerText = "Underweight";
        bodyMassComment.style.color = "orange";
    }else if(bmi < 24.9){
        bodyMassComment.innerText = "Normal";
        bodyMassComment.style.color = "green";
    }else if(bmi < 29.9 ){
        bodyMassComment.innerText = "Overweight";
        bodyMassComment.style.color = "CF0F47";
    }else{
        bodyMassComment.innerText = "Obesity";
        bodyMassComment.style.color = "red";
    }
 
    
}

function clearButton(){
    heightInput.value = 0;
    weightInput.value = 0;
    bodyMassOutput.innerText = '';
    bodyMassComment.innerText = '';
    resultsDiv.display = "hide";
    
}


