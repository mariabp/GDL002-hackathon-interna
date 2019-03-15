const moviesForMoodies = MOVIES.dataMovies;
const suggestionResults = document.querySelector('#suggestionResults');


//Arrays para cada mood
const down = [moviesForMoodies[0],moviesForMoodies[1]];
const powerUp = [moviesForMoodies[2],moviesForMoodies[3]];
const doIt = [moviesForMoodies[4],moviesForMoodies[11]];
const appeal = [moviesForMoodies[5],moviesForMoodies[14]];
const emotional = [moviesForMoodies[8],moviesForMoodies[12]];
const sensitive = [moviesForMoodies[6],moviesForMoodies[7]];
const irritable = [moviesForMoodies[9],moviesForMoodies[10]];
const zen = [moviesForMoodies[13],moviesForMoodies[15]];


//Función para obtener películas
const getMoviesbyDefaultMood = (mood) => {
    
    console.log(mood);
    switch (mood) {
        case 'down':
          movieInfoLayout(down);
          break;

        case 'powerUp':
            movieInfoLayout(powerUp);
            break;

        case 'doIt':
          movieInfoLayout(doIt);
          break;
          
        case 'appeal':
            movieInfoLayout(appeal);
            break;
      
        case 'emotional':
          movieInfoLayout(emotional);
          break;
          
        case 'sensitive':
            movieInfoLayout(sensitive);
            break;

        case 'irritable':
          movieInfoLayout(irritable);
          break;
          
        case 'zen':
            movieInfoLayout(zen);
            //console.log(zen);
            break;
    }
};  

//Funcion para mostrar la informacion de cada película
const movieInfoLayout = (data) => {

    moviesForMoodies.filter((element) => { 

        let movieInfo = 
                        `
                        <div class="givenmovies">   
                            <div class="background">     
                                <img id="poster" src="${element.Poster}">
                                <p id="movietitle"${element.Title}>
                                <p id="director">${element.Director}</p>
                                <p id="runtime">${element.Runtime}</p>
                                <p class="wrap-text" id="text-footer">
                                <p id="genre">Genre: ${element.Genre}</p>
                                <p id="ratting">Ratting: ${element.imdbRating}</p>
                                <p id="plot">Plot: ${element.Plot}</p>
                                
                                </div>    
                            </div>
                        </div>`


        ;

    suggestionResults.innerHTML += movieInfo;
    }
)};