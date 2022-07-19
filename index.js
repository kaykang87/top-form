const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");

password2.addEventListener("keyup", confirmPassword);

function confirmPassword() {
  if (password1.value === password2.value) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "password matching";
    password1.classList.remove("red-border");
    password2.classList.remove("red-border");
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "password not matching";
    password1.classList.add("red-border");
    password2.classList.add("red-border");
  }
}
