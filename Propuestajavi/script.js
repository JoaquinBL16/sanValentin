const yesBtn = document.getElementById("yes-btn")
const noBtn = document.getElementById("no-btn")
const backgroundImage = document.getElementById("background-image")
const container = document.querySelector(".container")

const images = ["imagenes/minion1.jpg", "imagenes/minion2.jpg", "imagenes/imagen1.jpg", "imagenes/imagen2.jpg"]
let currentImageIndex = 0

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length
  backgroundImage.src = images[currentImageIndex]
}

yesBtn.addEventListener("click", () => {
  alert("¡Sabía que dirías que sí! Te amo con todo mi corazón ❤️\n\nFeliz San Valentín")
})

function moveButton(e) {
  const containerRect = container.getBoundingClientRect()
  const buttonRect = noBtn.getBoundingClientRect()

  const maxX = containerRect.width - buttonRect.width
  const maxY = containerRect.height - buttonRect.height

  const randomX = Math.floor(Math.random() * maxX)
  const randomY = Math.floor(Math.random() * maxY)

  noBtn.style.position = "absolute"
  noBtn.style.left = `${randomX}px`
  noBtn.style.top = `${randomY}px`

  changeBackgroundImage()
}

noBtn.addEventListener("mouseover", moveButton)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault() // Previene el comportamiento por defecto del toque
  moveButton(e)
})

// Precargar imágenes
images.forEach((src) => {
  const img = new Image()
  img.src = src
})

