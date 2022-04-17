function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(560, 290);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
}

function take_snapshot() {
    save('swara.png');
}

function circle() {
    circle(30,30,20);
}

function rectangle() {
    rect(30, 20, 55, 55);
}