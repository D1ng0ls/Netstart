//abre os produtos
function abreprod(id) {
    const prod = document.getElementById("prod" + id);
    const desc = document.getElementById("desc" + id);
    const img = document.getElementById("img" + id);

    const todosOsProdutos = document.querySelectorAll('.prod');
    todosOsProdutos.forEach(item => {
        item.classList.remove('select');
    });

    const todasAsDescricoes = document.querySelectorAll('.desc');
    todasAsDescricoes.forEach(item => {
        item.classList.remove('apears');
    });

    const todasAsImagens = document.querySelectorAll('.img-desc');
    todasAsImagens.forEach(item => {
        item.classList.remove('block');
    });

    prod.classList.toggle("select");
    desc.classList.toggle("apears");
    img.classList.toggle("block");

    abretopico(id, 1)
}

//abre os topicos de cada produto
function abretopico(idlist, id) {
    const topic = document.getElementById("topic" + idlist + id);
    const text = document.getElementById("txt-tpc" + idlist + id);

    const todosOsTopicos = document.querySelectorAll('.topic');
    todosOsTopicos.forEach(item => {
        if (item.id !== 'topic' + id) {
            item.classList.remove('slct');
        }
    });

    const todosOsTextos = document.querySelectorAll('.text-topic');
    todosOsTextos.forEach(item => {
        if (item.id !== 'txt-tpc' + id) {
            item.classList.remove('selecionado');
        }
    });

    topic.classList.toggle("slct");
    text.classList.toggle("selecionado");
}

//abre as perguntas
function abrefaq(id) {
    const resp = document.getElementById("resp" + id);
    const quest = document.getElementById("quest" + id);

    // Fecha todas as respostas
    const todasAsRespostas = document.querySelectorAll('.quest-reposta');
    todasAsRespostas.forEach(item => {
        if (item.id !== 'resp' + id) {
            item.classList.remove('quest-resposta-mostra');
        }
    });

    const todasAsQuestoes = document.querySelectorAll('.faq-quest');
    todasAsQuestoes.forEach(item => {
        if (item.id !== 'quest' + id) {
            item.classList.remove('roda');
        }
    });

    // Abre ou fecha a resposta clicada
    resp.classList.toggle("quest-resposta-mostra");
    quest.classList.toggle("roda");
}

//scrola e aparece a sombra
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").className = "fixed";
    } else {
        document.getElementById("header").className = "";
    }
}

//slider empresas
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = Array.from(sliderTrack.children);

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
});