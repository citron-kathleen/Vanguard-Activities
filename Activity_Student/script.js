const VALID_USERNAME = "omlingo";
const VALID_PASSWORD = "pupt";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        errorMessage.style.color = '#27ae60';
        errorMessage.textContent = 'Login successful!';
        
        setTimeout(() => {
            alert('Welcome, ' + username + '!');
        }, 500);
    } else {
        errorMessage.style.color = '#e74c3c';
        errorMessage.textContent = 'Invalid username or password!';
        
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});