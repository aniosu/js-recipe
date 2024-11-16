const figure = document.getElementById("figure")
const onMouce = document.getElementById("onmouce")
figure.onclick = function () {
  figure.classList.toggle("rounded")
}
onMouce.onmouseover = function () {
  figure.classList.toggle("rounded")
}
