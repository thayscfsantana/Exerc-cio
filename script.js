var number1;
var number2;
var result;


function Sum(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 + number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;
}

function Subtrac(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 - number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;
}

function Division(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 / number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;
}

function Multiply(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 * number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;
}
