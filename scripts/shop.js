const buttons = document.querySelectorAll(".item button");
let cartItems = [];

buttons.forEach((button) => {
  button.addEventListener("click", function() {
    const itemName = button.nextElementSibling.textContent;
    cartItems.push(itemName);
    window.alert(itemName + " added to cart");
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  });
});



