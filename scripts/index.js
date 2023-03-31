const containerPages = { //a map for the containers to which pages they are linked to
    'jamaica-container': 'jamaica.html',
    'chile-container': 'chile.html',
    'philippines-container': 'philippines.html',
    'bulgaria-container': 'bulgaria.html'
  };
  
  const containers = document.querySelectorAll('.earth-container > .left > div, .earth-container > .right > div'); //getting all elements from the earth-container
  
  containers.forEach(container => {//event listener for when the images are being clicked by the user
    container.addEventListener('click', () => {
      
      const className = container.className; //gets the name of the class that was called
      const page = containerPages[className]; //looks up the HTML page to redirect the user from the containerPages map
      const url = `${page}`;//creates the URLs for each of the pages ones they are open
    
      window.location.href = url;//redirects the user to the corresponding URL to the image they clicked
    });
  });

    // get the current URL
var currentURL = window.location.href;

// get all the links in the navbar
var links = document.querySelectorAll('.navbar ul li a');

// loop through the links and add the active class to the current link
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentURL) {
    links[i].classList.add('active');
  }
}