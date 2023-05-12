
function blank_value() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let addr = document.getElementById("addr").value;
    let date = document.getElementById("date").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;
    let exp = document.getElementById("exp").value;
    let mno = document.getElementById("mno").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    
    if (fname == ""){
        document.getElementById("msg1").innerText = "Enter First name"
        return false;
    }
    if (mname == ""){
        document.getElementById("msg2").innerText = "Enter Middle name"
        return false;
    }
    if (lname == ""){
        document.getElementById("msg3").innerText = "Enter last name"
        return false;
    }
    if (addr == ""){
        document.getElementById("msg4").innerText = " Enter Address"
        return false;
    } 
    if (date == "") {
        document.getElementById("msg5").innerText = "Enter Date of Birth"
        return false;
    }
    if (male == false && female == false && other == false) {
        document.getElementById("msg6").innerText = "Select gender compulsory"
        return false;
    }
    if (exp == -1) {
        document.getElementById("msg7").innerText = "Select experiance"
        return false;
    }
    if (mno == "") {
        document.getElementById("msg8").innerText = "Enter mobile number"
        return false;
    }
    if (email == "") {
        document.getElementById("msg9").innerText = "Enter email id"
        return false;
    }
    if (pass == "") {
        document.getElementById("msg10").innerText = "Enter password"
        return false;
    }
}

