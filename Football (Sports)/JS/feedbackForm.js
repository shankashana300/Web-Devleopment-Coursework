//-------------------------------------------------Student two------------------------------------------

//---------------------------------Main Page Java Script----------------------------------


//function to validate form fields
function feedback(){
    //get all the inputs from the form to the variables
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var comments=document.getElementById("comments").value;
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var submit=document.getElementById("submit");
//to give an alert when necessary fields are not completed
    while (firstname==="" || lastname==="" || email==="" || comments===""){
        alert("Please fill all fields !");
        return false;
    }

//when the form is fully completed
    if (document.getElementById("verySatis").checked || document.getElementById("satis").checked || document.getElementById("notSatis")){
        var rate=document.getElementsByName("rate")
        for(var i=0; i<rate.length; i++){
            if (rate[i].checked){
                var text1="Dear" + " " + firstname +" "+ lastname + ","
                var text2="We Appreciate your feedback. Thank you for your message.";
                var text3="Please check whether the below information is correct before submitting."
                var text4= "Email: "+ email ;
                var text5="Rating: "+ rate[i].value;
                var text6="Subject: " + subject;
                //inserting the details to the relevant ids of the modal box
                document.getElementById("form-content1").innerHTML=text1;
                document.getElementById("form-content2").innerHTML=text2;
                document.getElementById("form-content3").innerHTML=text3;
                document.getElementById("form-content4").innerHTML=text4;
                document.getElementById("form-content5").innerHTML=text5;
                document.getElementById("form-content6").innerHTML=text6;
                modal.style.display = "block";
                
            }
        }
        span.onclick = function() {
            modal.style.display = "none";
          }
       
    }else{
        alert("Please fill all the fields.")
    }
    
}
function submitForm() {
    var frm = document.getElementsByName('feedbackForm')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    modal.style.display = "none";
    return false; // Prevent page refresh
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