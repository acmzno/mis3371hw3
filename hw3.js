/*
Name: April Campuzano
Date created: 2/20/2025
Date last edited: 4/13/2025
Version: 2.0
Description: MIS 3371 Homework 3 JS 
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//first name validation
function validateFname() {
    fname= document.getElementById("fname").value.trim();
    var namePattern = /^[a-za-Z'-]+$/;
// checks if first name is left empty
if (fname==""){
    document.getElementById("fname-error").innerHTML.HTML = "First name cannot be empty";
    return false;
}else if (fname != "") {
    if (!fname.match(namePattern)) {//checks if fname matches pattern
        document.getElementById ("fname-error").innerHTML = "Letters, apostrophes, and dashes only";
        return false;
    }else if (fname.length< 2) {//checks if fname is at least one character
            document.getElementById("fname-error").innerHTML = "First name can't be less than two characters";
            return false;
            else if (fname.length > 30) {//checks first name if more than 30 characters
                document.getElementById("fname-error").innerHTML = "First name can't be more than 30 characters";
                return false;
        } else {
            document.getElementById("fname-error").innerHTML = "";
            return true;
    }
    }
    
}
}
//last name validation
function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-za-Z'-]+$/;
    //check if last name is empty
    if (lname==""){
        document.getElementById("lname-error").innerHTML.HTML = "Last name cannot be empty";
        return false;
    }else if (lname != "") {
        if (!lname.match(namePattern)) {//checks if lname matches pattern
            document.getElementById ("lname-error").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
        }else if (lname.length< 2) {//checks if lname is at least one character
                document.getElementById("lname-error").innerHTML = "Last name can't be less than two characters";
                return false;
                else if (lname.length > 30) {//checks last name if more than 30 characters
                    document.getElementById("lname-error").innerHTML = "Last name can't be more than 30 characters";
                    return false;
            } else {
                document.getElementById("lname-error").innerHTML = "";
                return true;
        }
        }
        
    }
    }

//middle initial validation
function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/;

//makes middle initial uppercase
    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;
//checks that middle initial is 1 character
    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}


//dob validation
function validateDob() {
  dob = document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

  if (date > new Date()) {
      document.getElementById("dob-error").innerHTML = 
      "Date can't be in the future";
      dob.value = "";
      return false;
  } else if (date < new Date(maxDate)) {
      document.getElementById("dob-error").innerHTML = 
      "Date can't be more than 120 years ago";
      dob.value = "";
      return false;
  } else {
      document.getElementById("dob-error").innerHTML = "";
      return true;
  }
}
//ssn validation
function validateSsn() {
  const ssn = document.getElementById("ssn").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnR.test(ssn)) {
      document.getElementById("ssn-error").innerHTML = 
      "Please enter a valid SSN";
      return false;
  } else {
      document.getElementById("ssn-error").innerHTML = "";
      return true;
  }
}
​
//address validation
function validateAddress1() {
  var ad1 = document.getElementById("address1").value;
  console.log(ad1);
  console.log(ad1.length);
  if (ad1.length < 2) {
    document.getElementById("address1-error").innerHTML=
    "Please enter address";
    return false;
} else {
    document.getElementById("address1-error").innerHTML= "";
    return true;
}}
//city validation
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}
//zip code validation
function validateZcode() {
  const zipInput = document.getElementById("zcode");
  let zip = zipInput.value.replace(/[^\d-]/g, "");

  if (!zip) {
      document.getElementById("zcode-error").innerHTML = 
      "Zip code can't be blank";
      return false;
  }
//changes to Zip4 if length is bigger than 5
  if (zip.length > 5) {
      zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
  } else {
      zip = zip.slice(0, 5);
  }

  zipInput.value = zip;
  document.getElementById("zcode-error").innerHTML = "";
  return true;
}
//email validation
function validateEmail (){
var email=document.getElementById("email").value;
var emailerror= document.getElementById("email-error");
var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailR.Input<1) {
    document.getElementById("email-error").innerHTML=
    "Email cannot be blank";
    return false;

  }
}
//phone validation
function validatePhone() {
  const phone = document.getElementById("phone").value;
  const error = document.getElementById("phone-error");
  const phoneR = /^\d{3}-\d{3}-\d{4}$/;
  if (!phone) {
    error.innerHTML = "Phone number cannot be left blank.";
    return false;
} else if (!phoneR.test(phone)) {
    error.innerHTML = "Enter a valid phone number in the format 000-000-0000.";
    return false;
   } else {
    error.innerHTML = "";
    return true;
  }
}
  //formats phone if it is not in correct format
  function formatPhone() {
    let phone = document.getElementById("phone").value.replace(/\D/g, "");
    if (phone.length > 3) phone = phone.slice(0, 3) + "-" + phone.slice(3);
    if (phone.length > 6) phone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 10);
    document.getElementById("phone").value = phone;
}
//validate userId
function validateUid() {
  uid = document.getElementById("uid").value.toLowerCase();
  document.getElementById("uid").value = uid;

  if (uid.length == 0) {
      document.getElementById("uid-error").innerHTML = 
      "User ID can't be blank";
      return false;
  }

  if (!isNaN(uid.charAt(0))) {
      document.getElementById("uid-error").innerHTML = 
      "User ID can't start with a number";
      return false;
  }

  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uid)) {
      document.getElementById("uid-error").innerHTML = 
      "User ID can only have letters, numbers, underscores, and dashes";
      return false;
  } else if (uid.length < 5) {
      document.getElementById("uid-error").innerHTML = 
      "User ID must be at least 5 characters";
      return false;
  } else if (uid.length > 30) {
      document.getElementById("uid-error").innerHTML = 
      "User ID can't exceed 30 characters";
      return false;
  } else {
      document.getElementById("uid-error").innerHTML = "";
      return true;
  }
}
//validate password
function validatePassword() {
  const pword = document.getElementById("pword").value;
  const uid = document.getElementById("uid").value;
  const error = document.getElementById("password-error");
  let errorMessage = [];
  if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");
            
            if (errorMessage.length > 0) {
                error.innerHTML = errorMessage.join("<br>");
                return false;
              } else {
                error.innerHTML = "";
                return true;}
 //confirm password validation
 function confirmPword() {
  pword1 = document.getElementById("pword").value;
  pword2 = document.getElementById("passconf").value;

  if (pword1 !== pword2) {
      document.getElementById("pword2-error").innerHTML = 
      "Passwords don't match";
      return false;
  } else {
      document.getElementById("pword2-error").innerHTML = 
      "Passwords match";
      return true;
  }
} 
//review input section
function reviewInput() {
  var formcontent = document.getElementById("signup");
  var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
  for (let i = 0; i < formcontent.length; i++) {
      if (formcontent.elements[i].value !== "") {
          switch (formcontent.elements[i].type) {
              case "checkbox":
                  if (formcontent.elements[i].checked) {
                      formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                  }
                  break;
              case "radio":
                  if (formcontent.elements[i].checked) {
                      formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                  }
                  break;
              default:
                  formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
          }
      }
  }
  formoutput += "</table>";
  document.getElementById("showInput").innerHTML = formoutput;
}
//clear review data
function removeReview() {
  document.getElementById("showInput").innerHTML = "";
}

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}
//validate all info
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

