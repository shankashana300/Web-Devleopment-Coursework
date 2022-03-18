//External JavaScript



 //Global Scope
let timeleft = 60; //How much time left
var stop = false; //A boolean value, used to stop the timer
var radioButtons = document.getElementsByClassName("line35");// create radio button array

//creating a function called countdown.
function countdown(){
	
	
	
		var start = document.getElementById("Start");//create a variable called start
		var timer = document.getElementById("Time"); //create a variable called timer
		
		//set the interval, time should be running every 1 second and call the function also known as time loop. 
		setInterval(function(){
			  //use for-loop
			  for (var i = 0; i < radioButtons.length; i++) {
               // making it all enable
                    radioButtons[i].disabled = false; //enable
					}
	        //if timeleft is less than 0 or press the submit button..
			if(timeleft <0 || stop){
			clearInterval(timeleft == 0); //Stop timer when it's 0.
			if (!stop){                   //If time is still running and hits 0 seconds.
				alert("Time's up");       // Display Time's up in a dialog box 
			    results();                // Also call out the results function 
			}
		    }else{                        //otherwise
			timer.innerHTML = timeleft;   //To make the timeleft visible  
			timeleft-=1;                  //The incremention is done by subtracting -1 to timeleft because every second in the timer should decrease.
			                              //that is why "let" is used.
		    }
		},1000); //every 1 second.
}

//creating a function called results.
function results(){
	stop = true; //A boolean value, used to stop the  timer.
	var Scores=0; //Stores all the corrected scores.
	var Correct=0; //Stores all marks
	var Marks=0;  //a container for Correct
	var x=0; //variable
	var y=0; //variable
	var Names; //variable
	
	//nested for-loop is used.
	//looping through the questions.
    for (x;x<=10;x++){
		Names =  document.getElementsByName("Number" + x); //access the name and place into "Names" container.
		//looping through answer in each radio button.
		for (y=0; y<Names.length; y++){
			CheckValues=Names[y];
			
			//nested if-statement is used.
			//checking if the value has been selected.
			if(CheckValues.checked){
				//checking if the value is correct.
				if(CheckValues.value==="correct"){
					Scores++; //if it is correct, the amount of corrected questions gets added one by one. 
					Correct+=2; //Marks gets added if the question is correct,2 marks gets added each time a question is right.
					CheckValues.nextSibling.style.color = "#4eff00"; //correct radio button turns light green.
				}
				else{
					CheckValues.nextSibling.style.color = "#fe1f00" ; //wrong radio button turns dark red.
					Correct-=1 //Marks gets subtracted if the question is wrong,-1 mark gets subtracted each time a question is wrong.
				}
			}
			else{
				CheckValues.nextSibling.style.color = " " ; //no color displayed if option not selected.
			}
		}   
	}

	Marks = Correct; //The variable which will store the how many marks you have got.
	
	document.getElementById("HowManyCorrectAnswers").innerHTML = Scores + "/10 Questions are correct.";  //Displays how many questions you have got correct
	document.getElementById("marks").innerHTML = "Your Mark is "+"  "+Marks + "/20"; //Displays how many marks you have got
	document.getElementById("time").innerHTML = "Your time is "+"  "+(60-(timeleft+1))+" Second"; //Displays time
	  var Scores;
	// Compare the scores with a range of numbers using if-else-if statement and display the background color.
	if (6<Scores && Scores<=10){
		document.body.style.backgroundColor = "green"; //background color turns green
		alert("Great Job"); //dialog box appears
	}
	else if(0<=Scores && Scores<=2){
		document.body.style.backgroundColor = "#ca0100"; //background color turns maroon
		alert("Poor Job"); //dialog box appears
	}
	   else{
		   document.body.style.backgroundColor = "#ffff00"; //background color turns light yellow
		   alert("Good Job"); //dialog box appears
	    }

}

	