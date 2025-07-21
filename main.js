let display = document.getElementById('user-input');
let lastWasResult = false;




function appendtodisplay (input){
const isOperator = ['+','-','*','/'].includes(input);


if (lastWasResult) {
    if ( isOperator){
        lastWasResult = false;
    }else{
        display.value = ""; 
        lastWasResult = false;
    }
        
        
    }
    display.value += input;
}



function cleardisplay(){
 
    display.value = " ";
     lastWasResult = false;
}

function calc() {
    try {
        let cleanedInput = display.value.replace(/\b0+(\d+)/g, '$1');
        
        display.value = eval(cleanedInput);
         lastWasResult = true;
    } catch {
        display.value = "Error";
        lastWasResult = false;

    }
}


