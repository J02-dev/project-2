document.querySelector('form').addEventListener('submit', checkGrade);

const F = 0; 
const D = 60;
const C = 70;
const B = 80;
const A = 90;

function checkGrade(e) {
    e.preventDefault();

    let myGrade = document.querySelector('input').value;

    let message = `<ul>`;

    console.log('RUNNING ... ')
    if (myGrade < A && myGrade >= A) {
    message += `<li>you got an A'`;
    }

    else if (myGrade >= A ) {
    message += `<li>you got an A`;
    }

    else if (myGrade >= B) {
    message += `<li>you got a B`;
    }

    else if (myGrade >= C) {
    message += `<li>You got a C`;
    }
   
    else if (myGrade >= D) {
        message += `<li>You got a D`;
        }
    
        else if (myGrade >= F) {
    message += `<li>You got a F`;
    }
    message += `</ul>`
    document.querySelector('#output').innerHTML = message;
}