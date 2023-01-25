fetch(`${urlApi}tv/popular?api_key=e0608bd99c0ab55b22dd875841bed505&language=es-MX&page=1`)
.then(async(resp) => {
    const finalResp = await resp.json();
    console.log(finalResp);

    let tarjetas = '';
    const {results} = finalResp; 
    console.log(results[0]);
    results.forEach(({name, first_air_date, overview, poster_path,vote_average }) => {
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

    document.getElementById("tarjetasPeliculas").innerHTML = tarjetas
})


  

