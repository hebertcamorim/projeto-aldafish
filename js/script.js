const mostrarLogin = document.querySelector('.login');

setTimeout(
    function show(){
        mostrarLogin.classList.add('login');
        mostrarLogin.style.opacity = 1;
    }, 500);
