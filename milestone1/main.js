// Get references to all buttons and divs
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
// Initial state for div visibility
var isDiv1Visible = false;
var isDiv2Visible = false;
var isDiv3Visible = false;
// Toggle visibility for Div 1
button1.addEventListener('click', function () {
    isDiv1Visible = !isDiv1Visible;
    if (isDiv1Visible) {
        div1.style.display = 'block';
        button1.style.backgroundColor = 'rgb(37, 11, 51)';
    }
    else {
        div1.style.display = 'none';
        button1.style.backgroundColor = 'black';
    }
});
// Toggle visibility for Div 2
button2.addEventListener('click', function () {
    isDiv2Visible = !isDiv2Visible;
    if (isDiv2Visible) {
        div2.style.display = 'block';
        button2.style.backgroundColor = 'rgb(37, 11, 51)';
    }
    else {
        div2.style.display = 'none';
        button2.style.backgroundColor = 'black';
    }
});
// Toggle visibility for Div 3
button3.addEventListener('click', function () {
    isDiv3Visible = !isDiv3Visible;
    if (isDiv3Visible) {
        div3.style.display = 'block';
        button3.style.backgroundColor = 'rgb(37, 11, 51)';
    }
    else {
        div3.style.display = 'none';
        button3.style.backgroundColor = 'black';
    }
});
