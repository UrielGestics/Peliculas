fetch(`${urlApi}movie/now_playing?api_key=e0608bd99c0ab55b22dd875841bed505&language=es-MX&page=1`)
.then(async(resp) => {
    const finalResp = await resp.json()

    const {results} = finalResp; 
    results.forEach((pelicula) => {
        console.log(pelicula);
    });
})