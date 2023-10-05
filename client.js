let result = document.getElementById("result");

const multiplyNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    let error = document.getElementById("error");
    if (num1.length === 0 || num2.length === 0) {
        error.innerText = "Vul een getal in";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }
    if (parseInt(num1) === 0 || parseInt(num2) === 0) {
        error.innerText = "Het getal is te laag";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }  else {
        error.innerText = "";
    }
    result.innerText = parseInt(num1) * parseInt(num2);
};

const divideNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    let error = document.getElementById("error");
    if (num1.length === 0 || num2.length === 0) {
        error.innerText = "Vul een getal in";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }
    if (parseInt(num1) === 0 || parseInt(num2) === 0) {
        error.innerText = "Het getal is te laag";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }  else {
        error.innerText = "";
    }
    result.innerText = parseInt(num1) / parseInt(num2);
};

const addNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    let error = document.getElementById("error");
    if (num1.length === 0 || num2.length === 0) {
        error.innerText = "Vul een getal in";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }
    if (parseInt(num1) === 0 || parseInt(num2) === 0) {
        error.innerText = "Het getal is te laag";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }  else {
        error.innerText = "";
    }
    result.innerText = parseInt(num1) + parseInt(num2);
};

const subtractNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    let error = document.getElementById("error");
    if (num1.length === 0 || num2.length === 0) {
        error.innerText = "Vul een getal in";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }
    if (parseInt(num1) === 0 || parseInt(num2) === 0) {
        error.innerText = "Het getal is te laag";
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";
        result.innerText = "0";
        return;
    }  else {
        error.innerText = "";
    }
    result.innerText = parseInt(num1) - parseInt(num2);
};

const clearNumbers = () => {
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";
    result.innerText = "0";
};
