
const musicas =[
    { id: 1, nome: "Lofi Relax", img: "img/exemplo1.jpg", audio: "musicas/musica1.mp3",key:"1" },
    { id: 2, nome: "Estudo Intenso", img: "img/exemplo1.jpg", audio: "musicas/musica2.mp3",key:"2"},
    { id: 3, nome: "Noite de Chuva", img: "img/exemplo1.jpg", audio: "musicas/musica3.mp3",key:"3"},
    { id: 4, nome: "Café da Manhã", img: "img/exemplo1.jpg", audio: "musicas/musica4.mp3",key:"4" },
];//array de objetos

const $container = $(".lista-musicas");
let musicasTocando = []

function pausar() {
    document.querySelectorAll("audio").forEach(musica => musica.pause())
}

musicas.forEach(musica => {
    const $div = $("<div>").addClass('musica'); 

    const $audio = $("<audio>").addClass('audio');
    $audio.attr("src", musica.audio);
    

    $div.html(`
        <img src="${musica.img}" alt="${musica.nome}">
        <p>${musica.nome} (${musica.key})</p>
    `);

    $div.append($audio);    

    //Click play/pause
    var $pureAudio = $audio[0];

    musicasTocando.push({
        key: musica.key,
        audio: $pureAudio
    })
    
    $div.on('click', ()=>{ 
        if($pureAudio.paused){
            pausar()
            $pureAudio.play();
        } else {
            $pureAudio.pause();
        }
    });


    $(document).on('keydown',
        function(event){

            if (event.key === musica.key) {
                if($pureAudio.paused){
                    pausar()
                    $pureAudio.play()
                }else{
                    $pureAudio.pause()
                }
                console.log(event.key);
            }
        }
    );
    

    $container.append($div);
});//forEach