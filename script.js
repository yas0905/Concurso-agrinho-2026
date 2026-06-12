// Exibe uma curiosidade sobre irrigação inteligente na página

function mostrarCuriosidade() { document.getElementById("texto").innerText = "Sistemas de irrigação automatizados podem reduzir significativamente o desperdício de água na agricultura, fornecendo a quantidade ideal de água no momento certo. Essa tecnologia aumenta a eficiência no uso dos recursos hídricos, contribui para a sustentabilidade e auxilia na produção de alimentos de forma mais responsável."; }

// Armazena o tamanho atual da fonte em porcentagem

let tamanhoFonte = 100;

// Ativa ou desativa o modo escuro do site

function alternarModoEscuro() {
    document.body.classList.toggle("dark-mode");
}

// Aumenta o tamanho da fonte até o limite de 150%

function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

// Diminui o tamanho da fonte até o limite de 80%

function diminuirFonte() {
    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}