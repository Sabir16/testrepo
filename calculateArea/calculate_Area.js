let length;
let width;
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerHTML= `The area of the rectangle is: ${area}`;
}
function groceryTracker() {
    let A1 = parseFloat(document.getElementById('Amount1').value);
    let A2 = parseFloat(document.getElementById('Amount2').value);
    let A3 = parseFloat(document.getElementById('Amount3').value);
    let total = A1+A2+A3;
    document.getElementById('total').innerHTML = `The total amounts is : ${total} $`;
}