peterpansong = "";
harrypottersong = "";
leftwristx = "";
leftwristy = "";
rightwristx = "";
rightwristy = "";
function preload(){
    peterpansong = "Peter Pan.mp3";
    harrypottersong = "Harry Potter.mp3";
}
function setup(){
    // does it matter if I type this ----> function setup (){
    canvas = createCanvas(600, 400);
    //canvas = createCanvas(width, height);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
    // why not posenet.on("poses", gotPoses); or why not posenet.on(poses, gotPoses);
    // why not posenet = ml5.posenet()! because it is written such in the hints section
}

function draw(){
    image(video, 0, 0, 600, 400);
}
function modelLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
    console.log(results)
    if(results.length > 0){
        leftwristx = results[0].pose.leftWrist.x.toFixed(0);
        leftwristy = results[0].pose.leftWrist.y.toFixed(0);
        rightwristx = results[0].pose.rightWrist.x.toFixed(0);
        rightwristy = results[0].pose.rightWrist.y.toFixed(0);
        console.log("Left wrist : x = " + leftwristx + " y = " + leftwristy);
        console.log("Right wrist : x = " + rightwristx + " y = " + rightwristy);
    }
}