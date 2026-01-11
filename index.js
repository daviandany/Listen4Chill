<<<<<<< HEAD
const musicas = [
    {id: 1, nome: "elton", img: "./arthur.png", audio: "./lofi.mp3", key: "w"},
    {id: 2, nome: "elton", img: "./arthur.png", audio: "./som2.mp3", key: "a"},
    {id: 3, nome: "elton", img: "./arthur.png", audio: "./som3.mp3", key: "s"},
    {id: 4, nome: "elton", img: "./arthur.png", audio: "./som4.mp3", key: "d"},
];

const container = document.getElementById("lista-musicas");

musicas.forEach(musica => {
    const div = document.createElement('div');
    div.classList.add('musica');

    const audio = document.createElement('audio');
    audio.src = musica.audio;

    div.innerHTML = `
        <img src="${musica.img}" alt="${musica.nome}">
        <p>${musica.nome} (${musica.key})</p>
    `;

    div.appendChild(audio);

    // Clique
    div.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
    });

    document.addEventListener('keydown',
        function(event){
            if (event.key === musica.key) {
                audio.currentTime = 0;
                audio.play();
            }
        }
    );

    container.appendChild(div);
});
=======
addEventListener
>>>>>>> 8e53f97 (daviandany)
