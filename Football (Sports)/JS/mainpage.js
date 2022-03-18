//-------------------------------------------------Student two------------------------------------------

//---------------------------------Main Page Java Script----------------------------------

//SLIDESHOW ARTICLES

var slide_num = 1;
showSlides(slide_num);

// the next button and the previous button controls
function nextPreviousSlides(n) {
  showSlides(slide_num += n);
}

// image button controls
function currentSlide(n) {
  showSlides(slide_num = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slide_num = 1}
  if (n < 1) {slide_num = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_num-1].style.display = "block";
  dots[slide_num-1].className += " active";
}
//footer subscribe
function subscribeBtnClicked(){
    var subscribeEmail= document.getElementById("email-text").value;
    if (subscribeEmail.trim()===""){
        alert("Please enter your email to subscribe to our newsletter");
    } else{
        alert("Thank you for subscribing to our newletter!")
        document.getElementById("email-text").value=""; //clearing the email-text field after it is submitted
    }
}
