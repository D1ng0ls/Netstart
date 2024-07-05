function abre(id) {
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