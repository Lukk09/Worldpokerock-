const titulos = document.querySelectorAll('.titulo');

titulos.forEach(titulo => {
    titulo.addEventListener('click', () => {

        const descricao = titulo.nextElementSibling;

        if (descricao.style.display === 'block') {
            descricao.style.display = 'none';
        } else {
            descricao.style.display = 'block';
        }
    });
});