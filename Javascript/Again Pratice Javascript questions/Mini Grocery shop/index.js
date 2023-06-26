// Function to get grocery items from API
const getGroceryItems = async () => {
  try {
    const response = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries"
    );
    const data = await response.json();
    console.log("shfdhga", data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Function to add item to cart
const addToCart = (item) => {
  let cartItems = JSON.parse(localStorage.getItem("items")) || [];
  cartItems.push(item);
  localStorage.setItem("items", JSON.stringify(cartItems));
};

// Function to remove item from cart
const removeFromCart = (index) => {
  let cartItems = JSON.parse(localStorage.getItem("items")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(cartItems));
  displayCartItems();
};

// Function to display grocery items

const displayGroceryItems = (groceryItems) => {
  const itemsContainer = document.getElementById("items");

  if (!itemsContainer) {
    console.error("Items container not found");
    return;
  }

  itemsContainer.innerHTML = "";

  groceryItems.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    itemCard.appendChild(itemName);

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemCard.appendChild(itemImage);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: $${item.price}`;
    itemCard.appendChild(itemPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add_to_cart");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
      addToCart(item);
      updateCartCount();
    });
    itemCard.appendChild(addToCartButton);

    itemsContainer.appendChild(itemCard);
  });
};

// Function to display cart items
const displayCartItems = () => {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";

  let cartItems = JSON.parse(localStorage.getItem("items")) || [];

  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("item");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    cartItem.appendChild(itemName);

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    cartItem.appendChild(itemImage);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: $${item.price}`;
    cartItem.appendChild(itemPrice);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeFromCart(index);
      updateCartCount();
    });
    cartItem.appendChild(removeButton);

    cartContainer.appendChild(cartItem);
  });

  calculateTotalPrice();
};

// Function to update cart count
const updateCartCount = () => {
  let cartItems = JSON.parse(localStorage.getItem("items")) || [];
  const itemCount = document.getElementById("item_count");
  itemCount.textContent = cartItems.length;
};

// Function to calculate total price of items in cart
const calculateTotalPrice = () => {
  let cartItems = JSON.parse(localStorage.getItem("items")) || [];
  const cartTotal = document.getElementById("cart_total");

  if (cartItems.length === 0) {
    cartTotal.textContent = "Cart is empty";
  } else {
    const totalPrice = cartItems.reduce(
      (total, item) => total + parseFloat(item.price),
      0
    );
    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }
};

// Event listener for checkout button
document.getElementById("checkout").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const address = document.getElementById("address").value;

  if (name && number && address) {
    localStorage.clear();
    updateCartCount();
    document.getElementById("order-message").textContent =
      "Your order is successfully placed";
  }
});

// const checkoutFun = (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const number = document.getElementById("number").value;
//   const address = document.getElementById("address").value;

//   if (name && number && address) {
//     localStorage.clear();
//     updateCartCount();
//     document.getElementById("order-message").textContent =
//       "Your order is successfully placed";
//   }
// };

// Fetch grocery items and display them
document.addEventListener("DOMContentLoaded", () => {
  // Get the grocery items and display them
  getGroceryItems()
    .then((data) => {
      console.log("getGroceryItems", getGroceryItems);
      displayGroceryItems(data);
      updateCartCount();
    })
    .catch((error) => {
      console.error(error);
    });

  // Call the displayCartItems function to show cart items when the cart.html page loads
  displayCartItems();
});
// getGroceryItems()
//   .then((data) => {
//     displayGroceryItems(data);
//     updateCartCount();
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // Call the displayCartItems function to show cart items when the cart.html page loads
// displayCartItems();
