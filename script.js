const password = document.querySelector('#password');
const confirmPwd = document.querySelector('#confirm-password');

if (password.textContent === confirmPwd.textContent) {
    confirmPwd.classList.add(':valid');
} else {
    confirmPwd.classList.add(':invalid');
}