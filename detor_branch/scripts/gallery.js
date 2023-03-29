var images = document.querySelectorAll('.gallery img');
var center = document.querySelector('.center');
var centerImg = document.querySelector('.center img');
var centerDesc = document.querySelector('.center p');

document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if (handle != null) onHandlePress(handle)
})

function onHandlePress(handle) {
    const content = handle.closest(".content").querySelector(".images")
    const contentIndex = parseInt(
        getComputedStyle(content).getPropertyValue("--images-index"))
    if (handle.classList.contains("left-handle")){
        content.style.setProperty("--images-index", contentIndex - 1)
    }
    if (handle.classList.contains("right-handle")){
        content.style.setProperty("--images-index", contentIndex + 1)
    }
}


images.forEach(function (image) {
    image.addEventListener('mouseover', function () {
        centerImg.src = this.src;
        var desc = this.parentElement.querySelector('.description');
        if (desc) {
            centerDesc.textContent = desc.textContent;
        } else {
            centerDesc.textContent = "";
        }
        center.style.display = 'block';
        this.classList.add('hovered');
    });

    image.addEventListener('mouseout', function () {
        center.style.display = 'none';
        this.classList.remove('hovered');
    });
});
