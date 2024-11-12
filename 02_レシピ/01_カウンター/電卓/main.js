const Text1 = document.getElementById("text1")
const Text2 = document.getElementById("text2")
const math = document.getElementById("math")
const answer = document.getElementById("answer")
let sum = 0
let num1
let num2
math.onclick = function () {
  //console.dir(Text1)
  //console.log(Text1.value)
  num1 = parseFloat(Text1.value)
  num2 = parseFloat(Text2.value)
  sum = num2 + num1
  console.log(num1)
  console.log(sum)
  answer.textContent = sum
}
