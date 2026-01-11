const musicas = [
    {id: 1, nome: "", img: ".src", audio: ""},
    {id: 2, nome: "", img: ".src", audio: ""},
    {id: 3, nome: "", img: ".src", audio: ""},
    {id: 4, nome: "", img: ".src", audio: ""},
];

const container = document.getElementById("lista-musicas");

musicas.forEach(musica => {
    const div = document.createElement('div')
    div.classList.add('musica')

    div.innerHTML = `
        <img src="${musica.img}" alt="${musica.nome}">
        <p>${musica.nome}</p>
        <audio controls src="${musica.audio}"></audio>
    `;

    container.appendChild(div);
})