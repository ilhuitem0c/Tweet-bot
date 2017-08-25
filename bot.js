//Requiere npm twit by ttezel
console.log("El bot ha iniciado");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
//Lista de tweets
var txt = ["Tweet one",
           "Tweet two",
           "Tweet three",
           "Tweet four",
           "Tweet n"];

//Se inicia y se deja un intervalo entre tweet y tweet
    pickatweet();
    var intervalo = setInterval(pickatweet, 1000*60*10);
    // 1000 = 1 seg * 60 = 1 minuto * 10 = 10 minutos
    // Twitter detecta un bot con un intervalo entre tweets de cinco horas

//Elije un tweet de la lista y lo elimina para que no lo vuelva a mostrar
function pickatweet(){
  var num = Math.floor(Math.random()*txt.length);
  var randomItem = txt[num];
  txt.splice(num, 1);
  tweetIt(randomItem);
//Cuando el tamaño de la lista es 0 (esta vacia) termina con el intervalo
  if (txt.length == 0) {
    clearInterval(intervalo);
    console.log("Termino");
  }
}

//Aqui se twittea el tweet que hemos tomado de la lista
function tweetIt(txt){
  var tweet = {
    status: txt
  }
  console.log(tweet);
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
    if(err){
      console.log("Algo salio mal");
    }else {
      console.log("Funciono");
    }
  }
}
