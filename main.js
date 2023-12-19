objects = [];
status = "";
function preload
video = createVideo('video.mp4');

function setup(){
canvas = createCanvas (480, 380);
canvas.center();
video.hide();
}

function start()
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Estado: Detectando Objetos";
}

function modelLoaded() {
console.log("¡Modelo cargado!")
status = true;
video.loop();
video.speed(1);
video.volume(0);
}

function gotResult() {
}
if(error) {
    console.log(error);
}
console.log(results);
object = results;
}


function draw() {
image(video, 0, 0, 480, 300);
if(status != "")

{
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Estado: Objeto Detectado";
        document.getElementById("number_of_objects").innerHTML = "Numero de objetos detectados: " + objects.length;

        fill("#ff0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " +  percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ff0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
}
}