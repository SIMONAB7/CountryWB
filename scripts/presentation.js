setTimeout(() => {
    document.body.classList.add("fadeout"); // add the "fadeout" class to the body
    setTimeout(() => {
      window.location.href = "index.html"; // redirect to the new page after a short delay
    }, 2000); // adjust the delay time (in milliseconds) as needed
  }, 3000); // wait 5000 milliseconds (or 5 seconds) before triggering the redirect