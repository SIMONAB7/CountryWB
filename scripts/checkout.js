const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const price = 99.99;
const selectedItems = document.getElementById("cart-summary");

if (cartItems && cartItems.length > 0) {
  const list = document.createElement("ul");
  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  selectedItems.appendChild(list);
}

const clearCartButton = document.getElementById("clear-cart");
clearCartButton.addEventListener("click", function() {
  localStorage.removeItem("cartItems");
  location.reload();
});

const totalPrice = cartItems ? cartItems.length * 99.99 : 0;
const totalElement = document.getElementById("total");
totalElement.textContent = "Total: £" + totalPrice.toFixed(2);


const payNowButton = document.getElementById("pay-now");
payNowButton.addEventListener("click", function() {
  window.alert("Order Confirm!");
  localStorage.removeItem("cartItems");
  location.reload();
});


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    target.classList.add('active');
    tab.classList.add('active');
  });
});