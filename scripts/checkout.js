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


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
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

const next = document.getElementById('shipping-submit');

next.addEventListener('click', () => {
  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content');
  tabs.forEach(tab => {
      const target = document.querySelector(tab.dataset.tabTarget);
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

const shippingForm = document.getElementById("shipping-form");
const shippingClear = document.getElementById("shipping-reset");

shippingForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting
  const name = shippingForm.elements["name"].value;
  const email = shippingForm.elements["email"].value;
  const address = shippingForm.elements["address"].value;
  const country = shippingForm.elements["country"].value;
  const state = shippingForm.elements["state"].value;
  const zipcode = shippingForm.elements["zipcode"].value;
  
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("address", address);
  localStorage.setItem("country", country);
  localStorage.setItem("state", state);
  localStorage.setItem("zipcode", zipcode);  

  const nameInput = document.getElementById("card-name");
  const storedName = localStorage.getItem("name");
  if(storedName) {
    nameInput.value = storedName;
  }
});

shippingClear.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("address");
  localStorage.removeItem("country");
  localStorage.removeItem("state");
  localStorage.removeItem("zipcode");
});


const paymentForm = document.getElementById("payment-form");
const paymentClear = document.getElementById("payment-reset");

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting
  const cardName = paymentForm.elements["card-name"].value;
  const cardNum = paymentForm.elements["card-number"].value;
  const expiryDate = paymentForm.elements["expiry-date"].value;
  const cvv = paymentForm.elements["cvv"].value;
  
  localStorage.setItem("cardName", cardName);
  localStorage.setItem("cardNum", cardNum);
  localStorage.setItem("expiryDate", expiryDate);
  localStorage.setItem("cvv", cvv);
 
  let alertInfo = "Order Confirm";
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const address = localStorage.getItem("address");
  const country = localStorage.getItem("country");
  const state = localStorage.getItem("state");
  const zipcode = localStorage.getItem("zipcode");


  alertInfo += "\nName: " + name;
  alertInfo += "\nEmail: " + email;
  alertInfo += "\nAddress: " + address;
  alertInfo += "\nCountry: " + country;
  alertInfo += "\nState: " + state;
  alertInfo += "\nZip-Code: " + zipcode;

  window.alert(alertInfo);
});

paymentClear.addEventListener("click", () => {
  localStorage.removeItem("cardName");
  localStorage.removeItem("cardNum");
  localStorage.removeItem("expiryDate");
  localStorage.removeItem("cvv");
});


const requiredInputs = document.querySelectorAll('#shipping-form input[required]');
const nextButton = document.getElementById('shipping-submit');

function checkFormValidity() {
  let isValid = true;
  requiredInputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });
  return isValid;
}

requiredInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (checkFormValidity()) {
      nextButton.removeAttribute('disabled');
    } else {
      nextButton.setAttribute('disabled', true);
    }
  });
});