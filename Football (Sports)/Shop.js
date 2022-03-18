
var arr = [];

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
console.log();

function submitCart(name,email){
  if(!validateEmail(email)){
    alert('Error please re enter the email address')
    return;
  }

  if(name == ""){
    alert('Error please enter a name')
    return;
  }


  let retVal = "<p>Name: " + name + "</p><p>" + "Email: " + email +"</p> <p> Invoice details </p> ----------------------------------";
  let total = 0

  console.log(arr)
  for (var key in arr) {
    var obj = arr[key];
    retVal += ("<p> Product: " + obj.item + "</p>" + "<p> price $ " + obj.price + "</P>" + "<p> Quantity " + obj.qty + "</P>")
    total += parseInt(obj.qty) * parseInt(obj.price);
    
  }  
  
  retVal += ("<p> total Bill: $ " + total + "</p>")
  console.log(retVal)

  document.getElementById("changeText").innerHTML = retVal;

}


function addToCart(name,price,quantity){
    alert('Item ' + name + ' added to the cart \n ' + quantity + " item(s) added"+ " $ "+parseInt(price)*quantity)

  //define new item and add the recieved data to it
  var newItem = {
    item: name,
    price: price,
    qty: parseInt(quantity)
};
var avail = false;
for (var key in arr) {
  var obj = arr[key];
  //check i the new item is already in the cart if so just increasing the quantity
  if(obj.item == name){
    avail = true;
    obj.qty = parseInt(obj.qty) + parseInt(quantity)
  }
}
//if the item is not there in
if(!avail){
  arr.push(newItem)
}

}

function resetCart(){
  arr = [];
  document.getElementById("changeText").innerHTML = " ";

}


//Getting the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, showing  the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll back to the top 
function topFunction() {
  document.documentElement.scrollTop = 0; 
}