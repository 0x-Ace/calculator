let display = document.getElementById('user-input');




function appendtodisplay (input){
 display.value += input;
   


}
function cleardisplay(){
 
    display.value = " ";
    
}

function calc() {
    try {
        let cleanedInput = display.value.replace(/\b0+(\d+)/g, '$1');
        
        display.value = eval(cleanedInput);
    } catch {
        display.value = "Error";
    }
}


