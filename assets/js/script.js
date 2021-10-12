onload = function startSlideshow() {
    var frames = document.getElementById("container").children;
    var frameCount = frames.length;
    var i = 0;
    setInterval(function() {
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";
    }, 3000);
}