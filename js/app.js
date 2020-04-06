const container = document.querySelector(".container")
const coffees = [
  { name: "Mina", image: "./images/mina.jpg" },
  { name: "Mohammad", image: "./images/mohammad.png" },
  { name: "Shahla", image: "./images/shahla.jpg" },
  { name: "Ankit", image: "./images/ankit.jpg" },
  { name: "Usman", image: "./images/usman.jpg" },
  { name: "Pardis", image: "./images/pardis.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}