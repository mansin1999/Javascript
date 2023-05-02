function reg_ex_n(uname, spanid) {

    let reg_ex = /^[a-zA-z]*$/

    if (reg_ex.test(uname.value)) {
        document.getElementById(spanid).innerText = "";
        return false;
    } else {
        document.getElementById(spanid).innerText = "incorrect name";
        return false;

    }
}

function check_val(blnk, spanid) {
    if (blnk.value == "" || blnk.value == null || blnk.value == -1) {
        document.getElementById(spanid).innerHTML = "Please fill this"
        return false
    } else {
        document.getElementById(spanid).innerHTML = ""
        return false
    }
}

function check_address_l() {
    let add = document.getElementById("add").value;
    if (add.length > 25) {
        document.getElementById("msg4").innerHTML = "Address must have 25 latters";
        return false;
    } else {
        document.getElementById("msg4").innerHTML = "";
        return false;
    }
}


function mobile_l() {
    let mn = document.getElementById("mn").value;
    if (mn.length < 10) {
        document.getElementById("msg8").innerHTML = "Enter Correct No";
        return false;
    } else {
        document.getElementById("msg8").innerHTML = "";
        return false;
    }
}


function mobile_ex(chec, spanid) {
    let reg_ex = /^[0-9]*$/;
    if (reg_ex.test(chec.value)) {
        document.getElementById(spanid).innerHTML = ""
        return false
    } else {
        document.getElementById(spanid).innerHTML = "Enter digit only"
        return false
    }
}


function email_ex(mail, spanid) {
    let reg_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg_ex.test(mail.value)) {
        document.getElementById(spanid).innerHTML = "";
        return false;
    } else {
        document.getElementById(spanid).innerHTML = "Enter Correct id";
        return false;
    }
}


function pass_regex() {
    let reg_ex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    let pass = document.getElementById("pass").value;

    if (reg_ex.test(pass)) {
        document.getElementById("msg10").innerHTML = "";
        return false
    } else {
        document.getElementById("msg10").innerHTML = "Enter Correct password";
        return false
    }
}
 