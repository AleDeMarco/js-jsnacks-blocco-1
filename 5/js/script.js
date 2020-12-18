var parola1 = prompt('Scrivi la prima parola:');
var parola2 = prompt('Scrivi la seconda parola:');

if (parola1.length > parola2.length) {
  document.getElementById('corta').innerHTML = parola2;
  document.getElementById('lunga').innerHTML = parola1;
}
else {
  if (parola1.length < parola2.length) {
    document.getElementById('corta').innerHTML = parola1;
    document.getElementById('lunga').innerHTML = parola2;
  }
  else {
    document.getElementById('corta').innerHTML = 'Le parole sono lunghe uguali:';
    document.getElementById('lunga').innerHTML = parola1 + '<br>' + parola2;
  }
}
