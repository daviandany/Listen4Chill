//array de objetos
const musicas = [
    { id: 1, nome: "Lofi Relax", img: "img/exemplo1.jpg", audio: "musicas/musica1.mp3", key: "1" },
    { id: 2, nome: "Estudo Intenso", img: "img/exemplo1.jpg", audio: "musicas/musica2.mp3", key: "2" },
    { id: 3, nome: "Noite de Chuva", img: "img/exemplo1.jpg", audio: "musicas/musica3.mp3", key: "3" },
    { id: 4, nome: "Café da Manhã", img: "img/exemplo1.jpg", audio: "musicas/musica4.mp3", key: "4" },
];

const $container = $(".lista-musicas");
let musicsPlaying = []


//pause function
function pausar() {
    document.querySelectorAll("audio").forEach(musica => {
        musica.pause();
        musica.currentTime = 0;
    })
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


    //logic to dont play all at the same time
    musicsPlaying.push({
        key: musica.key,
        audio: $pureAudio
    })



    //function to click event
    $div.on('click', () => {
        if ($pureAudio.paused) {
            $(".musica").removeClass('opacityToMusics');
            pausar()
            $pureAudio.play();
            $($div).addClass('opacityToMusics');
        } else {
            $pureAudio.pause();
            $pureAudio.currentTime = 0;
            $($div).removeClass('opacityToMusics');

        }
    });



    //function to key click event 
    $(document).on('keydown',
        function (event) {

            if (event.key === musica.key) {
                if ($pureAudio.paused) {
                    $(".musica").removeClass('opacityToMusics');
                    pausar()
                    $pureAudio.play();
                    $($div).addClass('opacityToMusics');
                } else {
                    $pureAudio.pause();
                    $pureAudio.currentTime = 0;
                    $($div).removeClass('opacityToMusics');
                }
                console.log(event.key);
            }
        }
    );




    $container.append($div);
});//forEach


//h1 callbacktext
var storingTheH1Text = $('h1').text();

//hover to h1
$("h1").hover(
    function () {
        if ($(this).hasClass('changeTitle')) {
            $(this).removeClass('changeTitle').text(storingTheH1Text);
        } else {
            $(this).addClass('changeTitle').text("Listen For Chill");
        }
    }
)

function playRandomMusic() {
    pausar();
    $(".musica").removeClass('opacityToMusics');

    const randomIndex = Math.floor(Math.random() * musicas.length);
    const music = musicsPlaying[randomIndex];
    const $musicCard = $(".musica").eq(randomIndex);

    if (music && music.audio) {
        music.audio.currentTime = 0;
        music.audio.play();
        $musicCard.addClass('opacityToMusics');
    }
}

var colorsHidden = $(".hiddenColor").hide();
$("#seeBackgroundButtons").on("click", function () {
    $(colorsHidden).slideToggle();
})

$('#colorRed').on("click", function (event) {
    $("body").toggleClass('redColor');
})

$("#colorBlue").on("click", function () {
    $("body").toggleClass('blueColor');
})

$('#colorAqua').on("click", function () {
    $("body").toggleClass('aquaColor');
})

$("#colorYellow").on("click", function () {
    $("body").toggleClass('yellowColor');
})

function resetColors() {
    $("body").removeClass("redColor blueColor aquaColor yellowColor")
}

$("#backColor").on("click", function () {
    resetColors();
})


//to do:
//do array color objects to backgrounds
//back color after changing to another
//do volume control
//change images
//play in row
//about collaborators



