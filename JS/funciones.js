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

console.log(URLPagina);

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
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="button" id="buscarNavbar">Buscar</button>
      </form>
    </div>
  </div>
</nav>`;

document.getElementById("barraNavegacion").innerHTML = barra;