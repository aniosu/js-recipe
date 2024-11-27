const catImage = document.getElementById("cat-image")

fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    catImage.src = data.message
  })
