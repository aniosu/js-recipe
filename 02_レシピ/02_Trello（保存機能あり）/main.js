const addButton = document.getElementById("add-button")
const inputToDo = document.getElementById("input-todo")
const cardsContainer = document.getElementById("cards-container")
let memo = []
addButton.onclick = function () {
  const text = inputToDo.value
  memo.push(text)
  localStorage.memo = JSON.stringify(memo)
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text
  cardsContainer.append(card)
  inputToDo.value = ""
}
if (localStorage.memo) {
  // ローカルストレージのmemosキーからJSONを読み込む。
  const memosJson = localStorage.memo
  // JSON.parseで配列にして、memosを更新する。
  memo = JSON.parse(memosJson)

  // ページ読み込み時に、配列の内容をブラウザに反映する。
  for (let i = 0; i < memo.length; i++) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = memo[i]
    cardsContainer.append(card)
  }
}
