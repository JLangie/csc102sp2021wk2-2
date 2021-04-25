//Function to limit access to main page. Identifies first name, last name, badge number, and full name.
function checkCreds() {

    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName
    //Limits character total of fullName to 20 and states badgeNumb must be between 1- 1000.
    if (fullName.length > 20 || fullName.length == 1) {
        // if true,
        document.getElementById("loginStatus").innerHTML = "Full name invalid!"
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number!"
    }
    //Grants access to UAT space page if conditions of fullName and badgeNumb are met.
    else {
        alert("Access Granted!! Welcome" + " " + fullName + "!");
        location.replace("index.html");
    }
}