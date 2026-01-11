
const musicas = [
    {id: 1, nome: "elton", img: "./arthur.png", audio: "./lofi.mp3", key: "1"},
    {id: 2, nome: "elton", img: "./arthur.png", audio: "./som2.mp3", key: "2"},
    {id: 3, nome: "elton", img: "./arthur.png", audio: "./som3.mp3", key: "3"},
    {id: 4, nome: "elton", img: "./arthur.png", audio: "./som4.mp3", key: "4"},
];//array de objetos

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

    div.addEventListener('click', function(){
        if (audio.paused) {
            audio.play(); 
        } else {
            audio.pause(); 
        }
    });

    document.addEventListener('keydown',
        function(event){
            if (event.key === musica.key) {
                if(audio.paused){
                    audio.play()
                }else{
                    audio.pause()
                }
            }
        }
    );

    container.appendChild(div);

});//forEach

