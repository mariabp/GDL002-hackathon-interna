const moviesForMoodies = MOVIES.dataMovies;
const resultsHtml = document.querySelector('#results');

//Funcion para mostrar la informacion de cada película
const movieInfoLayout = (data) => {

	moviesForMoodies.filter((element) => { 
       // console.log(element);

        let movieInfo = 
       
        `
			<div id="movieidentifier${element.Title}">

                <div class="primaryinfolayout">
                    <img id="poster" src="${element.Poster}">
					<div id="director">${element.Director}</div>
					<div id="runtime">${element.Runtime}</div>
				</div>

			</div>`
		;
        
	
        results.innerHTML += movieInfo;
        
		return movieInfo;
    })};
    
    movieInfoLayout();