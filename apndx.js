audioPlayer = document.querySelector('#song')

function draw() {
    const bpm = 132
    const demoTime = getTime() * bpm / 60

    textFont('Press Start 2P')
    colorMode(HSL) // Hue (0..360), Saturation (0..100), Lightness (0..100)


    if (demoTime < 4) {
      intro1(demoTime)

    } else if (demoTime < 8) {
      intro2(demoTime)

    } else if (demoTime < 12) {
      intro3(demoTime)

    } else if (demoTime < 16) {
      intro4(demoTime)

    } else if (demoTime < 20) {
        //ballScene(demoTime)

    } else if (demoTime < 24) {
        //stickScene(demoTime - 16)

    } else if (demoTime < 32) {
        //ballScene(demoTime)

    } else if (demoTime < 40) {
        //squareScene(demoTime - 32)

    } else if (demoTime < 48) {
        //noiseScene(demoTime)

    } else if (demoTime < 56) {
        //squareScene(demoTime - 48)

    } else if (demoTime < 64) {
        //noiseScene(demoTime)

    } else {
        endDemo()

    }
}


function intro1(sceneTime) {
  background(35, 100, 50) // ?
  textAlign(CENTER, CENTER)
  textSize(64)
  fill(0, 0, 0) // black
  noStroke()
  text('Virman bileet goes Avaruus', width/2, height/2)

}

function intro2(sceneTime) {
  background(35, 100, 50) // ?
  textAlign(CENTER, CENTER)
  textSize(30)
  fill(0, 0, 0) // black
  noStroke()
  text('Music credits: hajame, Virman Pileet Graffathon 2024 edit', width/2, height/2)
}

function intro3(sceneTime) {
  background(35, 100, 50) // ?
  textAlign(CENTER, CENTER)
  textSize(30)
  fill(0, 0, 0) // black
  noStroke()
  text('Credits: hajame viku apndx', width/2, height/2)
}

function intro4(sceneTime) {
  background(35, 100, 50) // ?
  textAlign(CENTER, CENTER)
  textSize(30)
  fill(0, 0, 0) // black
  noStroke()
  text('Greetings to all fellow Graffathon creatures', width/2, height/2)
}


function wave(sceneTime) {
  background(35, 100, 50) // ?
  textAlign(CENTER, CENTER)
  textSize(64)
  // White ellipse.
  ellipseMode(RADIUS);
  fill(255);
  ellipse(50, 50, 30, 30);

  // Gray ellipse.
  ellipseMode(CENTER);
  fill(100);
  ellipse(50, 50, 30+sceneTime*40, 20+sceneTime*30);
  rotate(sceneTime)
  describe('A white circle with a gray circle at its center. Both circles have black outlines.');
  text('ellipse', width/2, height/2)
}


function instructionsScene(sceneTime) {
    background(35, 100, 50) // orange
    textAlign(CENTER, CENTER)
    textSize(64)
    fill(0, 0, 0) // black
    noStroke()
    text('Press F to go fullscreen and space to start', width/2, height/2)
}



function stickScene(sceneTime) {
    background(35, 100, 50) // orange

    translate(width/2, height/2)

    fill(0, 0, 0) // black
    noStroke()
    // https://www.w3schools.com/jsref/jsref_tofixed.asp
    text(sceneTime.toFixed(2), 0, 0)

    stroke(0, 0, 0) // black
    strokeWeight(10)

    // https://p5js.org/reference/#/p5/rotate
    rotate(sceneTime)
    line(0, 100, 0, 300)
}



function ballScene(sceneTime) {
    background(210, 100, 50) // blue

    translate(width/2, height/2)

    fill(0, 0, 100) // white
    noStroke()

    text(sceneTime.toFixed(2), 0, 0)

    rotate(sceneTime)

    const bump = sceneTime - Math.floor(sceneTime)
    // https://p5js.org/reference/#/p5/map
    const radius = map(bump, 0, 1, 0, 100)
    ellipse(0, 200, radius, radius)
}



function squareScene(sceneTime) {
    background(340, 100, 50) // purple

    translate(width/2, height/2)

    stroke(0, 0, 100) // white
    strokeWeight(10)
    noFill()

    // https://p5js.org/reference/#/p5/rectMode
    rectMode(CENTER)
    for (let i = 0; i < 10; i++) {
        rotate(sceneTime * 0.1)
        // https://p5js.org/reference/#/p5/scale
        scale(0.9)
        rect(0, 0, 500, 500)
    }
}



function noiseScene(sceneTime) {
    background(130, 50, 50) // green

    fill(255)
    noStroke()

    // https://p5js.org/reference/#/p5/beginShape
    beginShape()
    for (let i = 0; i < 100; i++) {
        const x = map(i, 0, 99, 0, width)
        // https://p5js.org/reference/#/p5/noise
        const y = noise(i * 0.1, sceneTime / 16) * height
        vertex(x, y)
    }
    vertex(width, 800)
    vertex(0, 800)
    endShape(CLOSE)
}
