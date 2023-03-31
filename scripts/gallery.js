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
    const numImages = content.childElementCount;
    let newIndex;
    if (handle.classList.contains("left-handle")) {
      newIndex = contentIndex - 1;
      if (newIndex < 0 || newIndex == 1 ) {
        newIndex = numImages - 7;
      }
    }
    if (handle.classList.contains("right-handle")) {
      newIndex = contentIndex + 1;
      if (newIndex >= numImages || newIndex == 2) {
        newIndex = 0;
      }
  }

    content.style.setProperty("--images-index", newIndex);
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

  