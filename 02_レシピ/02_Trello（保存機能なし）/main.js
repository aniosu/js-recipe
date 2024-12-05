const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
const removeAllButton = document.getElementById("remove-all-button")

let list = []

// 省略

removeAllButton.onclick = function () {
  // 状態の更新
  list = []
  localStorage.list = JSON.stringify(list)

  // 状態の表示
  container.textContent = ""
}
if (localStorage.list) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list = JSON.parse(localStorage.list)

  // 状態の変化を画面に表示する
  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
  }
}

addButton.onclick = function () {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = inputElement.value

  // card を作成
  const card = document.createElement("div")
  card.className = "card"

  // todo を作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  // todo を card の中に追加する
  card.append(todo)

  // 削除ボタン を作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタン を押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }

  // 削除ボタン を card の中に追加する
  card.append(deleteButton)

  // card を container の中に追加する
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}
