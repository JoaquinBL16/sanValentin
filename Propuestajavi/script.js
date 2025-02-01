const yesBtn = document.getElementById("yes-btn")
const noBtn = document.getElementById("no-btn")
const backgroundImage = document.getElementById("background-image")

const images = ["imagenes/minion1.jpg", "imagenes/minion2.jpg", "imagenes/imagen1.jpg", "imagenes/imagen2.jpg"]
let currentImageIndex = 0

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length
  backgroundImage.src = images[currentImageIndex]
}

yesBtn.addEventListener("click", () => {
  alert("¡Sabía que dirías que sí! Te amo con todo mi corazón ❤️\n\nFeliz San Valentín")
})

noBtn.addEventListener("mouseover", (event) => {
  const container = document.querySelector(".container")
  const buttonRect = noBtn.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  const maxX = containerRect.width - buttonRect.width
  const maxY = containerRect.height - buttonRect.height

  const randomX = Math.floor(Math.random() * maxX)
  const randomY = Math.floor(Math.random() * maxY)

  noBtn.style.position = "absolute"
  noBtn.style.left = `${randomX}px`
  noBtn.style.top = `${randomY}px`

  changeBackgroundImage()
})

// Precargar imágenes
images.forEach((src) => {
  const img = new Image()
  img.src = src
})

