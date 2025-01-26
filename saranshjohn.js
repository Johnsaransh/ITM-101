function addNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("result").textContent = num1 + num2;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers";
    }
}
