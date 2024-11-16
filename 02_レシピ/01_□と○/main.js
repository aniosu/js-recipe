const figure = document.getElementById("figure")
//const onMouce = document.getElementById("onmouce")
let count = 0
figure.onclick = function () {
  if (count === 0) {
    figure.classList.add("rounded")
    count++
    console.log(count)
  } else if (count === 1) {
    figure.classList.add("triangle")
    figure.classList.remove("rounded", "square")
    count++
    console.log(count)
  } else {
    figure.classList.add("square")
    figure.classList.remove("triangle")
    count = 0
    console.log(count)
  }
}
/*onMouce.onmouseover = function () {
  figure.classList.toggle("rounded")
}*/
