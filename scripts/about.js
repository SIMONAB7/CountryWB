const windows = document.querySelector(".window");
const student = document.querySelector(".students");

var hovers = document.getElementsByClassName("student");
for (var i=0; i<hovers.length; i++) {
    hovers[i].addEventListener("mouseover", autoOver);
    hovers[i].addEventListener("mouseout", autoOut);
}

function autoOver() {
    this.style.transform = "scale(1.1)"
    this.style.height = "410px";
    this.style.transition = "0.3s ease";
    this.style.marginBottom = "-90px";

    for (var i=0;i<hovers.length;i++){
        if (hovers[i] != this) {
            hovers[i].style.opacity = "0.7";
        }
    }
}

function autoOut() {
    this.style.transform = "scale(1.0)"
    this.style.height = "320px";
    this.style.marginBottom = "0";

    for (var i=0;i<hovers.length;i++){
        if (hovers[i] != this) {
            hovers[i].style.opacity = "1";
        }
    }
}