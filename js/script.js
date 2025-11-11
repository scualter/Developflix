import peliculas from './peliculas.js'

const accion   = document.getElementById("genero-28")
const thriller = document.getElementById("genero-53")
const aventura = document.getElementById("genero-12")


function pelisGenero (generoid, genero) {
  const pelisFiltradas = peliculas.filter(peli => peli.genre_ids.includes(generoid))
  const mostrarPelis = pelisFiltradas.map(peli => {
    const urlBase = "https://image.tmdb.org/t/p/w500"
    const template = `
    <div class="card">
    <img src="${urlBase}${peli.poster_path}" alt=${peli.title} />
    <h3>${peli.title}<h3>
  </div>
  `
  return template
}).join("")
  genero.innerHTML = mostrarPelis
}

pelisGenero(28, accion)
pelisGenero(53, thriller)
pelisGenero(12, aventura)


const peliculasfiltradasaventura = []
const peliculasfiltradasthriller = []

for(let i = 0; i < peliculas.length; i++) {
  if(peliculas[i].genre_ids.includes(12)) {
    peliculasfiltradasaventura.push(peliculas[i])
  }
}

for(let i = 0; i < peliculas.length; i++) {
  if(peliculas[i].genre_ids.includes(53)) {
    peliculasfiltradasthriller.push(peliculas[i])
  }
}

console.log(peliculasfiltradasaventura)
console.log(peliculasfiltradasthriller)
