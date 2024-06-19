document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var mainHeader = document.getElementById('mainHeader');

    menuToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        mainHeader.classList.toggle('show'); // Adiciona ou remove a classe 'show' no mainHeader
    });
});
