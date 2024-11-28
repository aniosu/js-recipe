const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const quizButton = document.getElementById("quiz-button")
const feedback = document.getElementById("feedback")
const choice = []
// クイズの内容
const quiz1 = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}
const quiz2 = {
  text: "この学校の名前は何でしょう",
  image: "",
  choices: [
    //text: "明治"
  ],
}
// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz1.text

  // 画像を表示
  quizImage.src = "./images/" + quiz1.image
  for (let i = 0; i < quiz.choices.length; i++) {
    choice[i] = document.createElement("button")
    choice[i].textContent = quiz1.choices[i].text
    choice[i].onclick = function () {
      // 0 番目の選択肢を選択
      choose(i)
    }
    quizButton.append(choice[i])
  }
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz1.choices[choiceNumber].feedback
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
