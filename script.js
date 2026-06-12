function mostrarCuriosidade(){document.getElementById("texto").innerText="Sistemas de irrigação automatizados podem reduzir significativamente o desperdício de água na agricultura, fornecendo a quantidade ideal de água no momento certo. Essa tecnologia aumenta a eficiência no uso dos recursos hídricos, contribui para a sustentabilidade e auxilia na produção de alimentos de forma mais responsável.";}


let tamanhoFonte = 100;

function alternarModoEscuro() {
    document.body.classList.toggle("dark-mode");
}

function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}