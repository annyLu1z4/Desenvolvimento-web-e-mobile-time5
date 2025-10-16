function login() {
    const username = document.getElementById('Email').value;
    const password = document.getElementById('password').value;

    if (username ==='chiclete@gmail.com' && password === '30112007') {
        window.location.href = 'index.html';
    } else {
        alert('Informações Incorretas');
    }
}

document.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    login();
}
});