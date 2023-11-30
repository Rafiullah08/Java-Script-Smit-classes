// let inputBox =document.getElementById('inputBox')
// let buttons = document.querySelectorAll('.buttons')

// let  string = ''
// buttons.forEach(element =>{
//     element.addEventListener("click", (b)=>{
// if(b.target.innerText == '='){
//     string = string(eval(string))
//     inputBox.value = string;
// }
// else if (b.target.innerText == 'AC'){
//     string = ''
//     inputBox.value = string;
// }else if(b.target == 'D'){
//     string= string.substring(0,string.length-1)
//     inputBox.value = string;
// } else if(b.target.id == 'plusMinus'){
//     string =string(-eval(string))
//     inputBox.value = string;
// }
// else{
//     string += b.target.innerText
//     inputBox.value = string
// }
//     })
// })


// Get the input element and buttons
var inputBox = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');

// Initialize the input string
var inputString = '';

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        var buttonText = button.innerText;

        switch (buttonText) {
            case 'AC':
                inputString = '';
                break;
            case 'DEL':
                inputString = inputString.slice(0, -1);
                break;
            case '=':
                try {
                    inputString = eval(inputString);
                } catch (error) {
                    inputString = 'Error';
                }
                break;
            default:
                inputString += buttonText;
                break;
        }

        // Update the input field
        inputBox.value = inputString;
    });
});

