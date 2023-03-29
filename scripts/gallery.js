document.addEventListener("click", e => {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target;
    } else {
      handle = e.target.closest(".handle");
    }
    if (handle != null) onHandlePress(handle);
  });
  
  function onHandlePress(handle) {
    const content = handle.closest(".content").querySelector(".images");
    const contentIndex = parseInt(
      getComputedStyle(content).getPropertyValue("--images-index")
    );
    if (handle.classList.contains("left-handle")) {
      content.style.setProperty("--images-index", contentIndex - 1);
    }
    if (handle.classList.contains("right-handle")) {
      content.style.setProperty("--images-index", contentIndex + 1);
    }
  }
  
  const images = document.querySelectorAll('.images img');
  const imgInside = document.querySelector('.img-inside img');
  
  images.forEach((image) => {
    image.addEventListener('click', () => {
      const caption = document.querySelector('.correct-placement');
      caption.innerHTML = image.getAttribute('data-caption');
      caption.classList.add('active');
    });
  });
  
  images.forEach(image => {
    image.addEventListener('click', () => {
      imgInside.src = image.src;
    });
  });
  