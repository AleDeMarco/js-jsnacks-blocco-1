var inviti = ['Pluto', 'Paperino', 'Pippo', 'Marco', 'Antonio'];
var user = prompt('Inserisci il tuo nome:');
user = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
var pass = false;

for (var i = 0; i < inviti.length; i++) {
  if (user == inviti[i]) {pass = true;};
}

if (pass == true) {document.getElementById('mess').innerHTML = 'Sei invitato!'}
else {document.getElementById('mess').innerHTML = 'Non sei invitato...'}
