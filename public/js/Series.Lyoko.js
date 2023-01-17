document.addEventListener("DOMContentLoaded", function(){
    console.log(Series.name+"\nv. 0.2.4");
    setTimeout(function(){
        document.getElementById("gknd-logo-button-container").classList.remove("loading-screen-logo-container");
        document.getElementById("gknd-logo-button-container").classList.add("corner-logo-container");
        
        document.getElementById("main-scene-container").classList.remove("hidden-scene");
        document.getElementById("main-scene-container").classList.add("visible-scene");
    }, 6000);
});