let audioPlayer = null
//let bg;

function now() {
    return Date.now() / 1000
}

let startTime = now()
let demoTime = 0
let paused = true

function getTime() {
    if (paused) {
        return demoTime + offSetSeconds
    } else {
        return now() - startTime + offSetSeconds
    }
}

function endDemo() {
    paused = true
    demoTime = 0
    if (document.fullscreenElement) {
        document.exitFullscreen()
    }

    if (audioPlayer) {
        audioPlayer.pause()
        audioPlayer.currentTime = 0
    }
}

window.addEventListener('keydown', (event) => {
    // F = Toggle fullscreen
    if (event.key === 'f') {
        let canvas = document.querySelector('canvas')
        if (!document.fullscreenElement) {
            canvas.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }

    // Space = Pause/unpause
    if (event.key === ' ') {
        if (paused) {
            paused = false
            if (audioPlayer) {
                audioPlayer.play()
            }
            startTime = now() - demoTime
            loop()
        } else {
            paused = true
            if (audioPlayer) {
                audioPlayer.pause()
            }
            demoTime = now() - startTime
            noLoop()
        }
    }

    // 0 = Reset time
    if (event.key === '0') {
        startTime = now()
        demoTime = 0
        if (audioPlayer) {
            audioPlayer.currentTime = 0
        }
        if (paused) {
            redraw()
        }
    }
})

document.fonts.ready.then(() => {
    redraw()
})

let offSetSeconds;
let img, bgY1, bgY2, isBgScroll, bgScrollSpeed, poika, sydan
let poikaY
let tyttoY
let sydanY
var maxDiameter; 
var theta; 
let kiitos;


function setup() {
    const app = createCanvas(1920, 1080)

    app.canvas.style = '' // Remove default scaling
    app.parent(document.body)

    offSetSeconds = 30;
    img = loadImage('assets/stars_bg.jpg')
    poika = loadImage('assets/poika.png')
    sydan = loadImage('assets/sydan.png')
    tytto = loadImage('assets/tytto.png')
    kiitos = loadImage('assets/kiitos-red.png')
    koira = loadImage('assets/koira.png')
    kissa = loadImage('assets/kissa.png')
    bgY1 = 0;
    bgY2 = height; 
    isBgScroll = false;
    bgScrollSpeed = 2;
    sydanY = height/4;
    poikaY = height/2;
    maxDiameter = 50; 
    theta = 0; 
    tyttoY = -height;
    background(0)
    noLoop()
}