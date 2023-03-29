function validar() {
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
  
    if (email == "" || password == "") {
        document.querySelector('.validate').innerHTML = "Por favor, preencha todos os campos.";
    }
  
    // validar o formato do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.querySelector('.email-warning').innerHTML = "Por favor, digite um e-mail válido.";
    }
  
    // validar a força da senha
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.querySelector('.password-warning').innerHTML = "A senha deve ter pelo menos 8 caracteres.";
    }
}