const buttons = document.querySelectorAll('.counterBtn');
const nee = document.querySelector('.nee');
let count = 0;

// add  event listeners and functionality to each buttons
buttons.forEach(function(button) {
button.addEventListener('click',function() {
    if (button.classList.contains('main')){
        count--
    } else if (button.classList.contains('sub')){
        count++
    }

        nee.textContent = count;

    if (count < 0) {
        nee.style.color = 'red';
    } else if (count > 0) {
        nee.style.color = 'green';
    } else{
        nee.style.color = 'green';
    }  
});    
});