const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se coloca punto dado que está especificado en HTML como clase
const $b = document.querySelector('.blog'); // Se coloca punto dado que está especificado en HTML como clase
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try { // Try catch se utiliza cuando queremos hacer un request en una API. Si hay un error, se va a catch
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Convierte la data en un objeto de Javascript que pueda ser leído
  console.log(data);
  $n.textContent = `${data.name}`; // Se cambó a backtick pues son template literals
  $b.textContent = `${data.blog}`; // Se cambó a backtick pues son template literals
  $l.textContent = `${data.location}`; // Se cambó a backtick pues son template literals
} catch (err) { // Segunda parte del try 

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}
} // Curly brackets de cierre

displayUser('stolinski').catch(handleError); // Punto y coma para cerrar el ejecutable