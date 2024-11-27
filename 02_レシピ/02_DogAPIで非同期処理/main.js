const imageElement = document.getElementById("dog-image")
const renewButton = document.getElementById("renew-button")

// 指定したサーバーにデータを取りに行く
renewButton.onclick = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}
