const musicas = [
    { id: 1, nome: "Lofi Relax", img: "img/exemplo1.jpg", audio: "audio1.mp3" },
    { id: 2, nome: "Estudo Intenso", img: "img/exemplo1.jpg", audio: "audio2.mp3" },
    { id: 3, nome: "Noite de Chuva", img: "img/exemplo1.jpg", audio: "audio3.mp3" },
    { id: 4, nome: "Café da Manhã", img: "img/exemplo1.jpg", audio: "audio4.mp3" },
];

const container = document.querySelector(".lista-musicas");

container.innerHTML = "";

musicas.forEach(musica => {
    const li = document.createElement('li');
    li.classList.add('musica');

    li.innerHTML = `
        <img src="${musica.img}" alt="${musica.nome}">
        <p>${musica.nome}</p>
        <audio controls src="${musica.audio}"></audio>
    `;

    container.appendChild(li);
});