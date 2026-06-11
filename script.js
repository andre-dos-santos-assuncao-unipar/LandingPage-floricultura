const elementos = document.querySelectorAll(
    ".card, .sobre, .contato"
);

function animarScroll() {
    elementos.forEach(elemento => {
        const topo = elemento.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {
            elemento.classList.add("mostrar");
        }
    });
}

elementos.forEach(el => {
    el.classList.add("animar");
});

window.addEventListener("scroll", animarScroll);
animarScroll();

document
    .getElementById("formContato")
    .addEventListener("submit", function(e){
        e.preventDefault();
        alert("Mensagem enviada com sucesso! 🌸");
        this.reset();
    });