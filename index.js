
const musicas =[
    { id: 1, nome: "Lofi Relax", img: "img/exemplo1.jpg", audio: "audio1.mp3",key:"1" },
    { id: 2, nome: "Estudo Intenso", img: "img/exemplo1.jpg", audio: "audio2.mp3",key:"2"},
    { id: 3, nome: "Noite de Chuva", img: "img/exemplo1.jpg", audio: "audio3.mp3",key:"3"},
    { id: 4, nome: "Café da Manhã", img: "img/exemplo1.jpg", audio: "audio4.mp3",key:"4" },
];//array de objetos

const container = document.querySelector(".lista-musicas");

musicas.forEach(musica => {

    const div = document.createElement('div');
    div.classList.add('musica');

    const audio = document.createElement('audio');
    audio.src = musica.audio;

    const li = document.createElement('li');
    li.classList.add('musica');

    li.innerHTML = `
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
    container.appendChild(li);
});//forEach

