var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var myItem = new Object({itemName: `${item}`,
                          itemPrice: (Math.floor(Math.random() * 100) + 1) })
  cart.push(myItem)
  return `${myItem.itemName} has been added to your cart.`
}

function viewCart() {
  var myString
  if(cart.length < 1)
    myString = "Your shopping cart is empty."
  else{
    myString = "In your cart, you have "
    for(var i = 0; i < cart.length;i++){
      if(i == cart.length-1 && cart.length != 1)
        myString = myString + "and "

      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}`

      if(cart.length > 1 && i != cart.length-1){
        myString = myString + ", "
      }
    }
    myString = myString + "."
  }
  return myString
}

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0;i<cart.length;i++){
    if(cart[i].itemName == item)
      cart.splice(i,1)
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber == null)
    return "Sorry, we don\'t have a credit card on file for you."
  else {
    var myTotal = total()
    for(var i = 0; i < cart.length;i++){
      cart.pop()
    }
    return `Your total cost is $${myTotal}, which will be charged to the card ${cardNumber}.`
  }
}
