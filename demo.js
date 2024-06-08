audioPlayer = document.querySelector('#song')

function draw() {
    const bpm = 115
    const demoTime = getTime() * bpm / 60

    textFont('Press Start 2P')
    //colorMode(HSL) // Hue (0..360), Saturation (0..100), Lightness (0..100)
    scrollBg(demoTime)


    if (demoTime < 12) {
        title(demoTime)
    
    }  else if (demoTime < 28) {
    intros(demoTime-12)


    } else {
        endDemo()

    }
}



function instructionsScene(sceneTime) {
    background(35, 100, 50, 100) // orange
    textAlign(CENTER, CENTER)
    textSize(34)
    fill(0, 0, 0) // black
    noStroke()
    text('Press F to go fullscreen and space to start', width/2, height/2)
}


function scrollBg(sceneTime){ 
    image(img, 0, bgY1, width, height);
    image(img, 0, bgY2, width, height);
  
    bgY1 += bgScrollSpeed;
    bgY2 += bgScrollSpeed;
    
    if (bgY1 > height){
      bgY1 = -height;
    }
    if (bgY2 > height){
      bgY2 = -height;
    }
  }

  function title(sceneTime) {
    background(img);
    textAlign(CENTER, CENTER);
    image(sydan, width / 2, height / 2, sydan.width *0.2, sydan.height *0.2);
    size = 64
    textSize(size);
    fill(35, 100, 50);
    noStroke();
    let y = height + 100 - sceneTime * 100
    texts = 'Virman bileet goes Avaruus'
    text(texts, width/2, y)
  }
  
  function intros(sceneTime) {
    background(img);
    textAlign(CENTER, CENTER);
    size = 30
    textSize(size);
    fill(35, 100, 50); 
    noStroke();
    let y = height + 100 - sceneTime * 100
    let texts = `
      Music credits 
      Virman Pileet Graffathon 2024 edit by hajame
  
  
  
  
  
      Credits
      hajame viku apndx
  
  
  
  
  
      Greetings to all fellow Graffathon creatures
      `;
  
    text(texts, width/2, y)
  }
  


function stickScene(sceneTime) {
    // background(35, 100, 50) // orange

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
    // background(35, 100, 50) // orange

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
    // background(340, 100, 50) // purple

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
    // background(130, 50, 50) // green

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