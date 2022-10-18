window.onload = function() {
  let btnDark = document.querySelector("button.dark");
  let btnLight = document.querySelector("button.light")
  let body = document.body;

  btnDark.onclick = function() {
    body.style.backgroundColor = 'blue';
  }

  btnLight.onclick = function() {
    body.style.backgroundColor = 'yellow';
  }
}