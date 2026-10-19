

document.addEventListener('DOMContentLoaded', function() {

    var categorias = document.querySelectorAll('.categoria');

    var menuCategorias = document.getElementById('menu-categorias');

    categorias.forEach((categoria, index) => {
        const nombreCategoria = categoria.querySelector('h3').textContent;

        const boton = document.createElement('button');

        boton.className = 'btn-categoria';

        boton.textContent = nombreCategoria;

        boton.dataset.categoria = index;

        if (index === 0) {
            boton.classList.add('activo');
        }

        boton.addEventListener('click', function() {
            mostrarCategoria(index);
        });

        menuCategorias.appendChild(boton);
    });

    categorias.forEach((categoria, index) => {
        if (index !== 0) {
            categoria.style.display = 'none';
        }
    });


    function mostrarCategoria(indice) {

        categorias.forEach(cat => {
            cat.style.display = 'none';
        });


        categorias[indice].style.display = 'block';


        categorias[indice].classList.add('fade-in');


        var botones = document.querySelectorAll('.btn-categoria');


        botones.forEach(btn => btn.classList.remove('activo'));


        botones[indice].classList.add('activo');


        document.querySelector('.productos-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }


    var btnVerTodas = document.getElementById('btn-ver-todas');


    if (btnVerTodas) {

        btnVerTodas.addEventListener('click', function() {
            categorias.forEach(cat => {
                cat.style.display = 'block';
            });


            var botones = document.querySelectorAll('.btn-categoria');


            botones.forEach(btn => btn.classList.remove('activo'));

            btnVerTodas.classList.add('activo');
        });
    }
});
