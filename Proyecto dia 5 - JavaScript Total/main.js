function recomendar(genero) {
    let edad = document.getElementById("edad").value;
    let pelicula;
    switch (genero) {
        case 'comedia':
            if (edad < 13) {
              pelicula = "Back to the Future";
            } else if (edad < 16) {
                pelicula = "The Truman Show";
            } else {
                pelicula = "The Wolf of Wall Street";
            }
            break;

        case 'drama': 
        if (edad < 13) {
            pelicula = "Casablanca";
          } else if (edad < 16) {
              pelicula = "The Shawshank Redemption";
          } else {
              pelicula = "Taxi Driver";
          }
            break;
        case 'crimen':
            if (edad < 13) {
                pelicula = "No hay peliculas";
              } else if (edad < 16) {
                  pelicula = "El secreto de sus ojos";
              } else {
                  pelicula = "The Godfather";
              }
            break;
        case 'musical':
            if (edad < 13) {
                pelicula = "La La Land";
              } else if (edad < 16) {
                  pelicula = "Les Miserables";
              } else {
                  pelicula = "The Rocky Horror Picture Show";
              }
            break;
    }
    document.getElementById("peliculaRecomendada").textContent = pelicula;
}

