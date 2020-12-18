// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var list = [];
for (var i = 0; i < 6; i++) {
  var num = parseInt(prompt('Inserisci un numero'));
  if (num % 2 != 0) {list.push(num);};
}
for (var i = 0; i < list.length; i++) {
  document.getElementById('dispari').innerHTML += list[i] + '<br>';
}
