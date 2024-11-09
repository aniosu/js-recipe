const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleBottun = document.getElementById("double-button")
let count = 0
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
minusButton.onclick = function () {
  count -= 1
  display.textContent = count
}
doubleBottun.onclick = function () {
  count *= 2
  display.textContent = count
}
