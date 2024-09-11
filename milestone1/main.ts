// Get references to all buttons and divs
const button1 = document.getElementById('button1') as HTMLButtonElement;
const button2 = document.getElementById('button2') as HTMLButtonElement;
const button3 = document.getElementById('button3') as HTMLButtonElement;

const div1 = document.getElementById('div1') as HTMLDivElement;
const div2 = document.getElementById('div2') as HTMLDivElement;
const div3 = document.getElementById('div3') as HTMLDivElement;

// Initial state for div visibility
let isDiv1Visible = false;
let isDiv2Visible = false;
let isDiv3Visible = false;

// Toggle visibility for Div 1
button1.addEventListener('click', () => {
  isDiv1Visible = !isDiv1Visible;
  if (isDiv1Visible) {
    div1.style.display = 'block';
    button1.style.backgroundColor = 'rgb(37, 11, 51)'
  } else {
    div1.style.display = 'none';
    button1.style.backgroundColor = 'black'
  }
});

// Toggle visibility for Div 2
button2.addEventListener('click', () => {
  isDiv2Visible = !isDiv2Visible;
  if (isDiv2Visible) {
    div2.style.display = 'block';
    button2.style.backgroundColor = 'rgb(37, 11, 51)'
  } else {
    div2.style.display = 'none';
    button2.style.backgroundColor = 'black'
  }
});

// Toggle visibility for Div 3
button3.addEventListener('click', () => {
  isDiv3Visible = !isDiv3Visible;
  if (isDiv3Visible) {
    div3.style.display = 'block';
    button3.style.backgroundColor = 'rgb(37, 11, 51)'
  } else {
    div3.style.display = 'none';
    button3.style.backgroundColor = 'black'
  }
});
