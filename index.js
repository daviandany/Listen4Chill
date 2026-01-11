const musicas = [
    {id: 1, nome: "elton", img: ".src", audio: ""},
    {id: 2, nome: "elton", img: ".src", audio: ""},
    {id: 3, nome: "elton", img: ".src", audio: ""},
    {id: 4, nome: "elton", img: ".src", audio: ""},
];

const container = document.getElementById("lista-musicas");

musicas.forEach(musica => {
    const div = document.createElement('div')
    div.classList.add('musica')

    const audio = document.createElement('audio')
    audio.src = musica.audio

    div.innerHTML = `
        <img src="${musica.img}" alt="${musica.nome}">
        <p>${musica.nome}</p>
    `;

    div.addEventListener('click', () => {
       audio.play() 
    })

    container.appendChild(div);
})