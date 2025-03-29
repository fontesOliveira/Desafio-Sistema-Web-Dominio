document.getElementById("agendar").addEventListener("click",
    function (event) {
        if (conferirObrigatoriosTexto(event)
            && conferirObrigatoriosCheck(event)
            && conferirObrigatoriosRadio(event)
            && conferirObrigatoriosSelect(event)) {
            event.preventDefault();
            alert("Você pressionou: Agendar Serviço");
        }
    }
);

document.getElementById("cancelar").addEventListener("click",
    function (event) {
        alert("Você pressionou: Cancelar Serviço");
    }
);

function conferirObrigatoriosTexto(event) {
    let campos = document.querySelectorAll(".obrigatorioT");
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value === "") {
            event.preventDefault();
            alert("Preencha todos os campos de texto obrigatórios!");
            return false;
        }
    }
    return true;
};


function conferirObrigatoriosCheck(event) {
    let checkboxes = document.querySelectorAll('input[name="opcao"]');
    let algumMarcado = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            algumMarcado = true;
            break; // Sai do loop se encontrar um checkbox marcado
        }
    }

    if (!algumMarcado) {
        event.preventDefault();
        alert("Preencha um dos campos checkbox obrigatórios!");
        return false;
    } else {
        return true;
    }
};

function conferirObrigatoriosRadio(event) {
    let radios = document.getElementsByName("tipo");
    let selecionado = false;
    let valorSelecionado = "";

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selecionado = true;
            valorSelecionado = radios[i].value; // Armazena o valor do botão de rádio selecionado
            break; // Sai do loop se encontrar um botão de rádio selecionado
        }
    }

    if (!selecionado) {
        event.preventDefault();
        alert("Preencha um dos campos do radio obrigatórios!");
        return false;
    } else {
        return true;
    }
};

function conferirObrigatoriosSelect(event) {
    let campos = document.querySelectorAll(".obrigatorioS");
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value === "") {
            event.preventDefault();
            alert("Preencha todos os campos do select obrigatórios!");
            return false;
        }
    }
    return true;
};