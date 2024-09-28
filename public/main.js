
const displayElement = document.getElementById("display");

//feature: clea math express or result
//iput: none 
//process: set value display elemet blank
//output: input elemet: blank
const clean = () => {
    //set value display elemet blank
    displayElement.value = "";
}

//feature: append to input element
//iput: none 
//process: value display element + data (from key event)
//output: math expression
const appendToDisplay = (data) => {
    //value display element + data (from key event)
    displayElement.value += data;
}

//feature: calculator math expresssion
//iput: none 
//process: set value display element = result (use eval method)
//output: math expression
const calculator = () => {
    try {
        //set value and round num (use toFix method)
        displayElement.value = parseFloat(eval(displayElement.value)).toFixed(2);
    } catch (error) {
        //handle if math expression error
        displayElement.value = "Error";
    }  
}
