const btn = document.querySelector("#btn");
const save = document.querySelector("#save");
const form = document.querySelector("#form-edit");

const nomeDisplay = document.querySelector(".nome");
const infoDisplay = document.querySelector(".info");
const sobreDisplay = document.querySelector(".sobre");
const experienciaDisplay = document.querySelector(".experiencia");

const nomeInput = form.querySelector('input[name="nome"]');
const infoInput = form.querySelector('input[name="info"]');
const sobreInput = form.querySelector('textarea[name="sobre"]');
const experienciaInput = form.querySelector('textarea[name="experiencia"]');

function toggleForm() {
    form.classList.toggle("show");

    if (form.classList.contains("show")) {
        btn.textContent = "❌";
        nomeInput.value = nomeDisplay.textContent.replace("Nome: ", "");
        infoInput.value = infoDisplay.textContent.replace("Informações: ", "");

        const sobreContent = document.querySelector('.conteudo-sobre');
        const experienciaContent = document.querySelector('.conteudo-experiencia');

        sobreInput.value = sobreContent ? sobreContent.textContent : "";
        experienciaInput.value = experienciaContent ? experienciaContent.textContent : "";
    } else {
        btn.textContent = "✏️";
    }
}

function saveInfo() {
    const nome = nomeInput.value.trim();
    const info = infoInput.value.trim();
    const sobre = sobreInput.value.trim();
    const experiencia = experienciaInput.value.trim();

    if (nome) {
        nomeDisplay.textContent = `Nome: ${nome}`;
    }

    if (info) {
        infoDisplay.textContent = `Informações: ${info}`;
    }

    if (sobre) {
        const bioSection = document.querySelector('.bio');
        bioSection.innerHTML = `
            <h4 class="sobre">Sobre:</h4>
            <div class="conteudo-sobre">${sobre}</div>
        `;
    }

    if (experiencia) {
        const formacaoSection = document.querySelector('.formacao');
        formacaoSection.innerHTML = `
            <h4 class="experiencia">Experiencia:</h4>
            <div class="conteudo-experiencia">${experiencia}</div>
        `;
    }


    form.classList.remove("show");
    btn.textContent = "✏️";

    form.reset();


    save.textContent = "Salvo! ✅";
    save.style.background = "#28a745";

    setTimeout(() => {
        save.textContent = "Salvar";
        save.style.background = "#89DE84";
    }, 2000);
}

btn.addEventListener("click", toggleForm);
save.addEventListener("click", function (e) {
    e.preventDefault();
    saveInfo();
});

form.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        saveInfo();
    }
});