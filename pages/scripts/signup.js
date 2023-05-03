const check = () => {
    var firstname = document.forms[`fromname`][`fname`].value;
    var lastname = document.forms[`fromname`][`lname`].value;
    var email = document.forms[`fromname`][`emailadd`].value;
    var pass1 = document.forms[`fromname`][`pass`].value;
    var pass2 = document.forms[`fromname`][`confpass`].value;

    let isValid = true;

    let lblFirstName = document.getElementById(`lblFname`)
    let lblLasttName = document.getElementById(`lblLname`)
    let lblemail = document.getElementById(`lblemail`)
    let lblpass = document.getElementById(`lblpass`)

    lblFirstName.innerHTML = ``
    lblLasttName.innerHTML = ``
    lblemail.innerHTML = ``
    lblpass.innerHTML = ``

    if (firstname != `` && firstname.length < 2 || firstname.length > 20) {
        lblFirstName.innerHTML = `name must be between 2-20 cahracters`
        isValid = false
    }
    if (lastname != `` && lastname.length < 2 || lastname.length > 20) {
        lblLasttName.innerHTML = `name must be between 2-20 cahracters`
        isValid = false
    }
    let index = email.indexOf(`@`);
    let provider = email.substring(index + 1);
    if (provider != `gmail.com` && provider != `yahoo.com`) {
        lblemail.innerHTML = `email must be contine gmail or yahoo`
        isValid = false
    }
    let isSpecialPass = false;
    for (i = 0; i < pass1.length; i++) {
        if (pass1.charAt(i) >= '!' && pass1.charAt(i) <= ')') {
            isSpecialPass = true;
            break
        }
    }
    if (pass1.length < 2 || pass1.length > 10 || isSpecialPass!=true) {
        lblpass.innerHTML = "Password must include special characters and range from 2-10.";
        isValid = false;
    }

    if (pass1 != pass2) {
        lblpass.innerHTML = `password must be the same`
        isValid = false
    }
    return isValid
}
