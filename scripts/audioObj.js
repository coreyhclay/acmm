let date = new Date();
let hour = date.getHours();
let gameSrc = 'nh/';
let weatherSrc = 'snow/';
let src = '/assets/ac-ost/' + gameSrc + weatherSrc + hour + '.mp3';
const audio = new Audio(src);
audio.loop = true;
audio.play();


if (document.querySelector("input[name='game']")) {
    document.querySelectorAll("input[name='game']").forEach((elem) => {
        elem.addEventListener('change', function (event) {
            gameSrc = event.target.value;
            src = '/assets/ac-ost/' + gameSrc + weatherSrc + hour + '.mp3';
            audio.src = src;
            audio.play();
        });
    });
}

if (document.querySelector("input[name='weather']")) {
    document.querySelectorAll("input[name='weather']").forEach((elem) => {
        elem.addEventListener('change', function (event) {
            weatherSrc = event.target.value;
            src = '/assets/ac-ost/' + gameSrc + weatherSrc + hour + '.mp3';
            audio.src = src;
            audio.play();
        });
    });
}