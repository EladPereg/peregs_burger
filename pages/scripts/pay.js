const checkPay = () => {
    let inp1 = document.forms[`fromsPay`][`pay1`].value;
    let inp3 = document.forms[`fromsPay`][`pay3`].value;

    let val = true

    let lblp1 = document.getElementById(`lblp1`)
    let lblp2 = document.getElementById(`lblp2`)
    let lblp3 = document.getElementById(`lblp3`)

    lblp1.innerHTML = ``;
    lblp2.innerHTML = ``;
    lblp3.innerHTML = ``;

    if (inp1.length != 16) {
        lblp1.innerHTML = `Card number must contain 16 digits`
        val = false
    }
    if (inp3.length != 3) {
        lblp3.innerHTML = `Please enter three digits`
        val = false
    }
    return val
}
