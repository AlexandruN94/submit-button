const submitButton = document.getElementById('button');
const passwordInput = document.getElementById('password');
const messageP = document.getElementById('message');
let isPasswordValid = false;

passwordInput.addEventListener('input', (event) => {
  if (event.target.value === 'supersecretpassword') {
    messageP.innerText = '';
    messageP.style.display = 'none';
    isPasswordValid = true;
    submitButton.style.transform = `translateX(0px)`;
  } else {
    messageP.style.display = 'block';
    messageP.innerText = 'Please input the correct password!';
    isPasswordValid = false;
  }
});

submitButton.addEventListener('mouseover', () => {
  if (isPasswordValid === true) {
    return;
  }

  if (submitButton.style.transform !== 'translateX(0px)') {
    submitButton.style.transform = `translateX(0px)`;
  } else {
    submitButton.style.transform = `translateX(295px)`;
  }
});
