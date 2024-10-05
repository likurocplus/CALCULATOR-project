
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
const calculate = () => {
    try {
        
        //1. declare and use eval to calcu
        let result  = parseFloat(eval(displayElement.value)).toFixed(2);
        
        /*2. if result 
        is NaN(The only exception is NaN which is still not equivalent to any value, including itself.)
        or is Infinity
        then throw new exception*/  
        if( isNaN(result) || result === Infinity){
            throw new Error("");
        }
        
        //3. set value for displayElement
        displayElement.value = result;
    } catch (error) {
        //handle if math expression error
        displayElement.value = "Error";
    }  
}
