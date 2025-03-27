function validatePassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const predictionContent = document.getElementById('prediction-content');
    const correctPassword = 'empire0579';

    if (password === correctPassword) {
        errorMessage.textContent = '';
        predictionContent.style.display = 'block';
        document.getElementById('password-form').style.display = 'none';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
