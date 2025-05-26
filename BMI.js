let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let bodyMassOutput = document.getElementById('bodymass-id');
let bodyMassComment = document.getElementById('comment-id');
let resultsDiv = document.getElementById('results');

const bodyMassButton = document.getElementById('calculate-button');
const resetButton = document.getElementById('reset-button');


bodyMassButton.onclick = calculatebodyMassOutput;

resetButton.addEventListener('click', clearButton);


function cleanInputString(str){
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str){
    const regex = /\d+e\d/i;
    return str.match(regex);
}



function calculatebodyMassOutput(){

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    // isInvalidInput(height);
    // isInvalidInput(weight);

    // cleanInputString(height);
    // cleanInputString(weight);

    if(!height || !weight || height<0 || weight<0){
        alert("Please enter valid values");
    }

    let bmi = (weight/(height ** 2)).toFixed(2);

    //resultsDiv.classList.remove('hide');
    resultsDiv.classList.add('show');

    bodyMassOutput.innerText = bmi;
 

    if(bmi < 18.5){
        bodyMassComment.innerText = "Underweight";
        bodyMassComment.style.color = "rgba(254, 167, 5, 0.874)";
    }else if(bmi < 24.9){
        bodyMassComment.innerText = "Normal";
        bodyMassComment.style.color = "rgb(22, 238, 6)";
    }else if(bmi < 29.9 ){
        bodyMassComment.innerText = "Overweight";
        bodyMassComment.style.color = "#f60449";
    }else{
        bodyMassComment.innerText = "Obesity";
        bodyMassComment.style.color = "red";
    }
 
    console.log(height);
}

function clearButton(){
    heightInput.value = '';
    weightInput.value = '';
    bodyMassOutput.innerText = '';
    bodyMassComment.innerText = '';
    resultsDiv.classList.remove('show');
    //resultsDiv.classList.add("hide");
  
    
}

