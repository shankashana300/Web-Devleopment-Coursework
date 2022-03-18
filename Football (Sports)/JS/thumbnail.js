// -------------------------------- thumnails -------------------------------------
function removeItem(list, item) {
    let index = list.indexOf(item);
    if (index > -1) {
        list.splice(index, 1);
    }
    return list;
}

function display(ClubNumber) {
    // Removing  the 'disable' class - displayContainer
    let displayContainer = document.getElementById('displayContainer')
    displayContainer.className = "container";

   // Removing  the 'disable' class - Club-details show the info of selected thumbnail
    let ClubID = document.getElementById(`Club-${ClubNumber}`);
    ClubID.className = "Club-details";
	
	//Remove thumbnail infor that not selected
    let ClubList = ['1', '2', '3', '4', '5'];
    ClubList = removeItem(ClubList, ClubNumber);

    for (let i = 0; i < ClubList.length; i++) {
        let otherClubID = document.getElementById(`Club-${ClubList[i]}`);
        otherClubID.className = "Club-details disabled";
    }

    // Scrolling down number of pixels
    window.scrollTo(0, 700);
}


// ------------------  Select Background Color--------------------------
function changeBodyBg(color){
    document.body.style.background = color;
}

// ------------------ Select Text Color---------------------------
function changeTextColor(color) {
    var title = document.getElementById("title");
    title.style.color = color;

    var containerHeaders = document.getElementsByClassName("container-title");
    for (var j = 0; j < containerHeaders.length; j++ ) {
        containerHeaders[j].style.color = color;
    }

    var captions = document.getElementsByClassName("caption");
    for (var k = 0; k < captions.length; k++ ) {
        captions[k].style.color = color;
    }


    var selectedClubTitle = document.getElementsByClassName("selected-image-title");
    for (var m = 0; m < selectedClubTitle.length; m++ ) {
        selectedClubTitle[m].style.color = color;
    }

    var selectedClubSubTitle = document.getElementsByClassName("subtitle");
    for (var z = 0; z < selectedClubSubTitle.length; z++ ) {
        selectedClubSubTitle[z].style.color = color;
    }

    var selectedClubDescription = document.getElementsByClassName("Clubdescription");
    for (var x = 0; x < selectedClubDescription.length; x++ ) {
        selectedClubDescription[x].style.color = color;
    }
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












