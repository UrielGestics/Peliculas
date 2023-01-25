const urlApi = `https://api.themoviedb.org/3/`;

const obtenerRuta = () => {
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length, rutaAbsoluta.length);
  return rutaRelativa;
}

const URLPagina = obtenerRuta();

let index = ` <a class="nav-link" aria-current="page" href="index.html">Peliculas</a>`;
let series = `<a class="nav-link" href="series.html">Series</a>`;
let peliculasPopulares = `<a class="nav-link" href="peliculasPopulares.html">Peliculas Populares</a>`;
let seriesPopulares = `<a class="nav-link" href="seriesPopulares.html">Series Populares</a>`;



switch (URLPagina) {
    case 'index.html':
    case 'index.html#':
        index = ` <a class="nav-link active" aria-current="page" href="index.html">Peliculas</a>`;
      break;
    case 'series.html':
    case 'series.html#':
        series = `<a class="nav-link active" href="series.html">Series</a>`;
      break;
    case 'peliculasPopulares.html':
    case 'peliculasPopulares.html#':
        peliculasPopulares = `<a class="nav-link active" href="peliculasPopulares.html">Peliculas Populares</a>`;
      break;
    case 'seriesPopulares.html':
    case 'seriesPopulares.html#':
        seriesPopulares = `<a class="nav-link active" href="seriesPopulares.html">Series Populares</a>`;
      break;
  
  }

  const barra = ` <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="IMAGES/Icon.png" width="30" height="30" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          ${index}
        </li>
        <li class="nav-item">
          ${series}
        </li>
        <li class="nav-item">
         ${peliculasPopulares}
        </li>
        <li class="nav-item">
          ${seriesPopulares}
        </li>
      </ul>
      <div class="d-flex" role="search">
        <input class="form-control me-2" id="buscarAlgo" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="button" id="buscarNavbar">Buscar</button>
      </div>
    </div>
  </div>
</nav>`;

document.getElementById("barraNavegacion").innerHTML = barra;

function fechaFormatoMX(date){
    const [day, month, year] = date.split('-');
    return [year, month, day].join('/');
  }
  
 function dibujarTarjetas(url,type){

  console.log(url);
 
  fetch(url)
.then(async(resp) => {
    const finalResp = await resp.json()

    let tarjetas = '';
    const {results} = finalResp; 
  
    if(type == 'pelicula'){

    
    results.forEach(( {title, release_date,  poster_path,vote_average } ) => {
      let clasificacion = '';
      for(let i = 1; i<=Math.round(vote_average); i++){
        clasificacion+=` <strong><i class="bi bi-star-fill amarillo"></i></strong>`;
      }
      let estrellasVacias= 9 - Math.round(vote_average);
      let clasificacionVacio = '';
      for(let i = 0; i<=estrellasVacias; i++){
        clasificacionVacio+=` <strong><i class="bi bi-star"></i></strong>`;
      }
        tarjetas+=  `<div class="col">
        <div class="card h-100">
          <img height="500" src="https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p>Fecha de salida: <strong>${fechaFormatoMX(release_date)}</strong></p>
            <p>Valoración: ${clasificacion} ${clasificacionVacio}</p>
          </div>
        </div>
      </div>`;
    });
  }else if(type == 'serie'){
    results.forEach(({name, first_air_date, poster_path,vote_average }) => {
      let clasificacion = '';
      for(let i = 1; i<=Math.round(vote_average); i++){
        clasificacion+=` <strong><i class="bi bi-star-fill amarillo"></i></strong>`;
      }
      let estrellasVacias= 9 - Math.round(vote_average);
      let clasificacionVacio = '';
      for(let i = 0; i<=estrellasVacias; i++){
        clasificacionVacio+=` <strong><i class="bi bi-star"></i></strong>`;
      }
        tarjetas+=  `<div class="col">
        <div class="card h-100">
          <img height="500" src="https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p>Fecha de salida: <strong>${fechaFormatoMX(first_air_date)}</strong></p>
            <p>Valoración: ${clasificacion} ${clasificacionVacio}</p>
          </div>
        </div>
      </div>`;
    });
  }else{
    results.forEach(({name, first_air_date, poster_path,vote_average, title, release_date, media_type }) => {
      let titulo, primerEmision, votacion, imagen;
      if(poster_path == undefined){
        imagen = 'IMAGES/No_image_available.svg.png'
      }else{
        imagen = `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`;
      }
      if(media_type == 'movie'){
        titulo = title;
        primerEmision = release_date;
      }else{
        titulo = name;
        primerEmision = first_air_date;
      }
      let clasificacion = '';
      for(let i = 1; i<=Math.round(vote_average); i++){
        clasificacion+=` <strong><i class="bi bi-star-fill amarillo"></i></strong>`;
      }
      let estrellasVacias= 9 - Math.round(vote_average);
      let clasificacionVacio = '';
      for(let i = 0; i<=estrellasVacias; i++){
        clasificacionVacio+=` <strong><i class="bi bi-star"></i></strong>`;
      }
      if(vote_average == 0){
        votacion = 'No hay votos aún'
      }else{
        votacion = clasificacion + clasificacionVacio;
      }
        tarjetas+=  `<div class="col">
        <div class="card h-100">
          <img height="500" src="${imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p>Fecha de salida: <strong>${fechaFormatoMX(primerEmision)}</strong></p>
            <p>Valoración: ${votacion}</p>
          </div>
        </div>
      </div>`;
    });
  }

    document.getElementById("tarjetasPeliculas").innerHTML = tarjetas
})


 }

 document.getElementById("buscarNavbar").addEventListener("click",function(){
  const query = document.getElementById("buscarAlgo").value;
  window.location.href = `buscar.html?q=${query}`;
 })