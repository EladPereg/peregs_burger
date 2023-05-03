const check2 = () => {
  let email = document.getElementById(`txtname`).value;
  let password = document.getElementById(`txtpass`).value;
  fetch(`/validate`, {
    'headers': {
      "Accept": `application/json`,
      "Content-Type": `application/json`
    },
    method: 'post',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data == undefined) {
        alert(`login failed
Please check that the email and password are the same as what you entered on the signup page`);
      }
      else {
        window.location.href = "/Menu2";
      }
    })
}