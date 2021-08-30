noseX = 0;
noseY = 0;
difference1 = 0;
difference2 = 0;
function setup() {
    canvas = createCanvas(500, 350);
    canvas.position(700, 250);
    video = createCapture(VIDEO);
    video.size(500, 350);
    video.position(200, 250);
    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#D3D3D3');
    fill('#E6F200');
    stroke('#FFFFFF');
    rect(noseX, noseY, difference1, difference2);

}
function preload() {}
function model_loaded() {
    console.log('PoseNet is loaded!');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        RightX = results[0].pose.rightWrist.x;
        LeftX = results[0].pose.leftWrist.x;
        difference1 = floor(LeftX - RightX);
        RightY = results[0].pose.rightWrist.y;
        LeftY = results[0].pose.leftWrist.y;
        difference2 = floor(LeftY - LeftX);
        document.getElementById("Width_tag").innerHTML = difference1;
        document.getElementById("Height_tag").innerHTML = difference2;
    }
}