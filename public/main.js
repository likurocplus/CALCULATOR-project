
const displayElement = document.getElementById("display");


const clean = () => {
    displayElement.value = "";
}

const appendToDisplay = (data) => {
    displayElement.value += data;
}

const calculator = () => {
    try {
        displayElement.value = parseFloat(eval(displayElement.value)).toFixed(2);
    } catch (error) {
        displayElement.value = "Error";
    }
   
}
