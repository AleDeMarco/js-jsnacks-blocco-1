var n1 = prompt('Inserisci il primo numero:');
var n2 = prompt('Inserisci il secondo numero:');

if (n1 < n2) {document.getElementById('numero').innerHTML = n2}
else {
  if (n1 > n2) {document.getElementById('numero').innerHTML = n1}
  else {document.getElementById('numero').innerHTML = 'Nessun numero'}
}
