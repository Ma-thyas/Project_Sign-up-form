const password = document.querySelector('#password');
const confirmPwd = document.querySelector('#confirm-password');
const pwdMsg = document.querySelector('.pwd-message');


function verifyPwd() {
    if (password.value !== confirmPwd.value) {
        confirmPwd.style.border = "1px solid red";
        pwdMsg.textContent = "* passwords do not match";
    } else {
        confirmPwd.style.border = "";
        pwdMsg.textContent = "";
    }
}

confirmPwd.addEventListener('input', verifyPwd);
password.addEventListener('input', verifyPwd);
