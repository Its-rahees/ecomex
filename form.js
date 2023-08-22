function addProductToCart(productId) {
    var cart = localStorage.getItem("cart");
    if (!cart) {
      cart = [];
    }
  
    cart.push(productId);
    localStorage.setItem("cart", cart);
  }
  
  function removeProductFromCart(productId) {
    var cart = localStorage.getItem("cart");
    if (!cart) {
      return;
    }
  
    var index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
      localStorage.setItem("cart", cart);
    }
  }
  
  function clearCart() {
    localStorage.removeItem("cart");
  }
  
  function checkout() {
    var cart = localStorage.getItem("cart");
    if (!cart) {
      alert("Your cart is empty.");
      return;
    }
  
    var email = "muhammedrahees010@gmail.com";
    var data = {
      cart: cart,
      email: email,
    };
  
    $.ajax({
      url: "/checkout",
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function(response) {
        if (response.success) {
          alert("Your order has been placed successfully.");
          clearCart();
        } else {
          alert(response.message);
        }
      },
      error: function(error) {
        console.log(error);
      },
    });
  }
  