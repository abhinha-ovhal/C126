left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload(){
    harry_song = loadSound("harry.mp3");
    peter_song = loadSound("peter.mp3");
}

function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("white");
    image(video, 0, 0, 700, 500);
}

function modelLoaded(){
    console.log("poseNet is Initialised.");
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log("Left Wrist X = "+ leftWristX +", Left Wrist Y = "+ leftWristY +", Right Wrist X = "+ rightWristX +", Right wrist Y = "+ rightWristY + ".");
    }
}