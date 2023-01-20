fetch(`${urlApi}movie/now_playing?api_key=e0608bd99c0ab55b22dd875841bed505&language=es-MX&page=1`)
.then(async(resp) => {
    const finalResp = await resp.json()

    let tarjetas = '';
    const {results} = finalResp; 
    console.log(results[0]);
    results.forEach(({title, release_date, overview, poster_path }) => {
        tarjetas+=  `<div class="col">
        <div class="card h-100">
          <img height="500" src="https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p>Fecha de salida: <strong>${fechaFormatoMX(release_date)}</strong></p>
          </div>
        </div>
      </div>`;
    });

    document.getElementById("tarjetasPeliculas").innerHTML = tarjetas
})

 