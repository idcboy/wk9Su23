/*this is my javascript code 
Cavri Johnson
*/ 

//a function to play craps on my index page

function playCraps(){
    //this alows me to know when function has started
    console.log("playCraps() started");
    //step one roll 2 6 sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);
    //step 1b link to html and print results on screen
    document.getElementById("die1Res").innerHTML =die1;
    document.getElementById("die2Res").innerHTML =die2;
//step 2. calculate the sum of die 1 and die 2
var diceSum = die1 + die2;
console.log("The sum of the dice is:" + diceSum);
document.getElementById("diceSum").innerHTML =diceSum;
    /*if (conditions for true) {
        do this if conditions are true
    }else if(another conditions for true){
        do this else if conditions are true
    }else{
        do this if none are true
    }*/

    //step 3.does the sum equal 7 or 11, meaning are you are loser
    if(diceSum==7||diceSum==11){
        document.getElementById("gameRes").innerHTML = "sorry no dice try again"
        //step 4. did the dice come up double> are they evens? if so, yo win
    }else if(die1 == die2 && die1%2 == 0){
        document.getElementById("gameRes").innerHTML = "Congratulations you win! GG"
    }else{
        //step 5. otherwise push
        document.getElementById("gameRes").innerHTML =
     "You did not lose, You did not win, Good luck please play again!"}
    
}

// start of function checkCreds for strings.html
function checkCreds(){
    console.log("checkCreds() started...");
    document.getElementById("loginStatus").innerHTML = "Status of login";
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLenght;
/* this will place the characters under the fName id in the firstName variable
*/
    firstName = document.getElementById("fName").value;
    console.log("The first name is inputted as " + firstName);
    /* this will place the characters under the lName id in the lastName variable
*/
    lastName = document.getElementById("lName").value;
    console.log("The last name is inputted as " + lastName);
    /* this will place the characters under the zipCode id in the zipCode variable
*/
    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code is inputted as " + zipCode);
    
    /* this makes the full name variable equal to 
    the first and last name with a space in between */
    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);
zipCodeNumb = parseInt(zipCode);
console.log("The zip code number is " + zipCodeNumb);
    fullNameLenght =fullName.length;
    console.log("The full name has " + fullNameLenght + " characters");
    /*i added some or statements to make it a tad bit mor realistic
    now it makes sure the user has at least entered 3 letters in either text box */
    if(firstName.length < 3 || lastName.length < 3 || fullNameLenght > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again";
    } else if(zipCode.length != 5 || zipCodeNumb < 0 || zipCodeNumb > 99999){
        document.getElementById("loginStatus").innerHTML = "Invalid zip code, please try again";
    } else{
        alert("User credientals have passed the login process, Welcome to the site, " + fullName);
    }

}

/*here is the begining of function startFun this function will start the animation of the images,
 disable the startButton, and enable the stopButton when the startButton is pressed. 
  I figured it out*/ 
function startFun(){
    //this will let me know when startFun has started
    console.log("startFun() started");
    //this will disable the startButton  when startButton is pressed
    document.getElementById("startButton").disabled = true;
// this will enable stopbutton when startButton is pressd
    document.getElementById('stopButton').disabled = false;
     /*this makes the style of memeimage equal to the spin3d animation  in css
           1s is time the animation takes ease-in-out makes it smooth infinite is amount of time the animation is done  */ 
           memeimage.style.animation = "spin3D 1s ease-in-out infinite";
           // the next two are to make it work in crome same concept
               memeimage.style.webkitAnimation = "spin3D 1s ease-in-out infinite";
               memeimage.style.blinkAnimation = "spin3D 1s ease-in-out infinite";
               /*this makes the style of memeimage2 equal to the spin3d2 animation  in css
                  1.5s is time the animation takes ease-in-out makes it smooth infinite is amount of time the animation is done  */
               memeimage2.style.animation = "spin3D2 1s ease-in-out infinite";
               // the next two are to make it work in crome same concept
               memeimage2.style.webkitAnimation = "spin3D2 1.5s ease-in-out infinite";
               memeimage2.style.blinkAnimation = "spin3D2 1.5s ease-in-out infinite";
    
    
}
/* linear | ease | ease-in | ease-out | ease-in-out */

/*here is the begining of function stopFun this function will stop the animation of the images,
 enable the startButton, and disable the stopButton when the stopButton is pressed.*/  
function stopFun(){
    //this lets me know when stopFun has started
    console.log("stopFun() started");
    //this will enable startButton when stopButton is pressed
    document.getElementById("startButton").disabled = false;
    //this will disable stopButton when stopButton is pressed
    document.getElementById("stopButton").disabled = true;

 /*this makes the style of the memeimage animation equal to none effectively stoping the animation */
 memeimage.style.animation = "";
 // the next two are two make it work in crome came concept
 memeimage.style.webkitAnimation = "";
 memeimage.blinkAnimationAnimation = "";
 /*this makes the style of the memeimage2 animation equal to none effectively stoping the animation */
 memeimage2.style.animation = "";
 //the next two are to make it work in other browsers same concept
 memeimage2.style.webkitAnimation = "";
 memeimage2.blinkAnimationAnimation = "";

     
}

//here is my checkPalin function to see if sentence is a palindrome
function checkPalin() {
  //this will write to the console letting me know when function checkPalin has started
console.log("checkPalin started");

//extract the entered text to a string variable called entStr
 var entStr;
 entStr = document.getElementById("palinInput").value;
 console.log("The text entered is: " + entStr);

//remove the spaces from the string
var entStrNoSpace = entStr.split(" ").join("");
console.log("no space = " + entStrNoSpace);

//create a new variable called revStr and store the entered string reversed here
var revStr;
const revArray = [];
length = entStrNoSpace.length - 1 ;
console.log("string length = " + length);
for(let i = length; i >=0; i--){
    revArray.push(entStrNoSpace[i]);
}
revStr = revArray.join("");
console.log("reversed is: " + revStr);

//compare entStr to revStr
var equal = 0;
equal = (entStrNoSpace === revStr);
console.log(equal);
//give notice of equality status
if(equal == true){
document.getElementById("palinStatus").innerHTML = "congratulations " + entStr + " <b>is</b> a Palindrome"
} else {
    document.getElementById("palinStatus").innerHTML = "Sorry but " + entStr + " <b>is not</b> a Palindrome"
}
    
}
