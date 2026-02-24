const titulos = document.querySelectorAll('.titulo');

titulos.forEach(titulo => {
    titulo.addEventListener('click', () => {
        const descricao = titulo.nextElementSibling;

        if (descricao.style.maxHeight) {
            descricao.style.maxHeight = null;
        } else {
            descricao.style.maxHeight = descricao.scrollHeight + "px"; 
        }
    });
});