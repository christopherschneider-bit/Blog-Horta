const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("Botão clicado!");
        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent = parseInt(texto.textContent) + 1;
            curtiu = true;
            botao.classList.add("curtido");
        } else {
            texto.textContent = parseInt(texto.textContent) - 1;
            curtiu = false;
            botao.classList.remove("curtido");
        }
    }
});
