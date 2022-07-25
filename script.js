const createAccountButton = document.querySelector('#create-btn');
const passwordButton = document.querySelector('#pswd');
const confirmPasswordButton = document.querySelector('#pswd-confirm');

let passwordValue = '';
let confirmPasswordValue = '';

createAccountButton.addEventListener('click', function (event) {
    // prevents the form from submission
    event.preventDefault();
    // console.log('khi khi');
    // console.log(`Password: ${passwordButton.value}`);
    // console.log(`Confirm Password: ${confirmPasswordButton.value}`);

    passwordValue = passwordButton.value;
    confirmPasswordValue = confirmPasswordButton.value;

    if (passwordValue === confirmPasswordValue) {
        // console.log('hue hue');
        passwordButton.classList.remove('mismatch');
        confirmPasswordButton.classList.remove('mismatch');
    } else {
        // console.log('kya matlab ghar se nikal');
        passwordButton.classList.add('mismatch');
        confirmPasswordButton.classList.add('mismatch');
    }
});
