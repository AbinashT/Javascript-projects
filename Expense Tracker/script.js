function getData() {
    // Get the input element by its ID
    var inputDateElement = document.getElementById("inputDate");
    var inputItemElement = document.getElementById("itemName");
    var inputQuantityElement = document.getElementById("itemQuantity");
    var inputPriceElement = document.getElementById("itemPrice");

    // Get the value entered by the user
    var inputDate = inputDateElement.value;
    var inputItem = inputItemElement.value;
    var inputQuantity = inputQuantityElement.value;
    var inputPrice = inputPriceElement.value;

    // Log the data to the console
    
    let totalPrice = inputQuantity * inputPrice;
    console.log(inputDate);
    console.log(inputItem);
    console.log(inputQuantity);
    console.log(inputPrice);
    console.log(totalPrice);
}


const items = [];

function addItem() {
  const date = document.getElementById("inputDate").value;
  const item = document.getElementById("itemName").value;
  const quantity = document.getElementById("itemQuantity").value;
  const price = document.getElementById("itemPrice").value;

  const totalPrice = quantity * price;

  const itemObj = {
    date,
    item,
    quantity,
    price,
    totalPrice
  };

  items.push(itemObj);

  displayItems();
}

function displayItems() {
  const itemList = document.querySelector(".itemList ul");

  itemList.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const listItem = document.createElement("li");

    listItem.innerHTML = `
      ${item.date} - ${item.item} - ${item.quantity} - ₹ ${item.price} - ₹ ${item.totalPrice}
      <button onclick="removeItem(${i})">X</button>
    `;

    itemList.appendChild(listItem);
  }
}

function removeItem(index) {
  items.splice(index, 1);

  displayItems();
}

