leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    classifier = ml5.poseNet(video,modelLoaded);
    classifier.on('pose',gotposes);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        document.getElementById("font_size").innerHTML = "font size is" + difference;
    }
}
function draw(){
    background("#6C91C2");
    textSize(difference);
    fill("#FFE787");
    text('Aarush',50,200);
}