const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time () {
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let mts = dateToday.getMinutes();
    let ss = dateToday.getSeconds();

    if(hrs < 10) hrs = '0' + hrs;

    if(mts < 10) mts = '0' + mts;

    if(ss < 10) ss = '0' + ss;


    horas.textContent = hrs; /*Mudar texto*/
    minutos.textContent = mts;
    segundos.textContent = ss;
})