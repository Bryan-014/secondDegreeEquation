let errors = false;

function calculate() {
    validEmptyTextBoxes();

    let a = validComponent(document.getElementById("inputA").value);
    let b = validComponent(document.getElementById("inputB").value);
    let c = validComponent(document.getElementById("inputC").value);

    if (a == 0) {
        alert("O valor de \"A\" não pode ser 0");
        errors = true;
    }

    if (errors) {
        return;
    }

    let rootDelt = Math.sqrt(calculateDelt(a, b, c));

    if (errors) {
        return;
    }

    let doubleA = 2 * a;

    let XOne = calculateXOne(b, rootDelt, doubleA);
    let XTwo = calculateXTwo(b, rootDelt, doubleA);

    alert("O valor de x¹ é: " + XOne + " e o valor de x² é: " + XTwo)
}
function validEmptyTextBoxes() {
    if (document.getElementById("inputA").value == "") {
        document.getElementById("inputA").value = 0;
    }
    if (document.getElementById("inputB").value == "") {
        document.getElementById("inputB").value = 0;
    }
    if (document.getElementById("inputC").value == "") {
        document.getElementById("inputC").value = 0;
    }
}
function validComponent(component) {
    if(isNaN(component)){
        alert("O valor: " + component + " é inválido");
        errors = true;
    }

    return parseFloat(component);
}
function calculateDelt(a, b, c) {
    let squareB = b * b;
    let x = squareB - 4 * a * c;
    if (x < 0) {
        alert("O valor de delta não pode ser negativo!")
        errors = true;
    }
    return x;
}
function calculateXOne(b, deltRoot, a) {
    let up = - b + deltRoot;
    return up / a;
}
function calculateXTwo(b, deltRoot, a) {
    let up = - b - deltRoot;
    return up / a;
}