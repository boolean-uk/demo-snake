const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// positional arguments
// x, y, width, height
// ctx.fillRect(20, 20, 5, 5)

// snake travels a path
// needed information: coordinates (x, y)

let start = {
  x: canvas.width/2,
  y: canvas.height/2
}
let maxlength = 1
let snacks = []
createSnacks()
let path = [start]
// when the snake moves, we add the new coordinate into the path, and remove the oldest position.

// event listening
window.addEventListener("keydown", function(event) {
  // where is the head of the snake? (last item added to it)
  const head = path[path.length-1]
  // add a new position
  if (event.code === "ArrowRight") {
    path.push({x: head.x+5 , y: head.y})
  } else if (event.code === "ArrowLeft") {
    path.push({x: head.x-5 , y: head.y})
  } else if (event.code === "ArrowDown") {
    path.push({x: head.x, y: head.y+5})
  } else if (event.code === "ArrowUp") {
    path.push({x: head.x, y: head.y-5})
  }

  drawSnake()
})

function drawSnake() {

  if (path.length > maxlength) {
    let tail = path.shift()
    ctx.clearRect(tail.x, tail.y, 5, 5)
  }
  // if snake is at maxlength, remove the oldest part
  // use the path array and draw each body part on the page!
  path.forEach(position => {
    ctx.fillStyle = "black"
    ctx.fillRect(position.x, position.y, 5, 5)
  })
}

function createSnacks() {
  // create 5 random blue squares
  for (let i=0; i<=4; i++) {
    const snack = {
      x: Math.round(Math.floor(Math.random() * canvas.width)/5)*5,
      y: Math.round(Math.floor(Math.random() * canvas.height)/5)*5
    }
    // draw the snack on the page
    ctx.fillStyle = "blue"
    ctx.fillRect(snack.x, snack.y, 5, 5)
    snacks.push(snack)
  }
}
