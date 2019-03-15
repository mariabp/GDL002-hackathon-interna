function passPage1(){
  document.getElementById("homescreen").style.display="block";//muestra el bloque o pantallas
  document.getElementById("showMovies").style.display="none";//se hace invisible mi pantalla
  //document.getElementById("resources").style.display="none";
  document.getElementById("video").innerHTML=`<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/WOi2Bwvp6hw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

document.getElementById("About").addEventListener("click", passPage1); //salto de pagina con click

function passPage2(){
  document.getElementById("homescreen").style.display="none";
  document.getElementById("showMovies").style.display="block";
  //document.getElementById("showMovies").style.display="none";
  document.getElementById("video").innerHTML="";
}
document.getElementById("Movies").addEventListener("click", passPage2);

function passPage3(){
  document.getElementById("Movies").style.display="none";
  document.getElementById("About").style.display="none";
  //document.getElementById("Resources").style.display="block";
  document.getElementById("video").innerHTML="";
}
//document.getElementById("resources").addEventListener("click", passPage3);


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }