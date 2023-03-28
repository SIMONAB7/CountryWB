var images = document.querySelectorAll('.gallery img');
var center = document.querySelector('.center');
var centerImg = document.querySelector('.center img');
var centerDesc = document.querySelector('.center p');

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
