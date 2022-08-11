let catmario;
let cImg;
let bImg;
let oImg;
let obstaculos = [];
let soundClassifier;

function preload(){
    const options = {probabilityThreshold:0.9};//pocentaje de que tan cercano esta al sonido
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);//modulo preentrenado con sonidos up, down
    cImg = loadImage('catmario.png');
    bImg = loadImage('background.png');
    oImg = loadImage('obstaculo.png');

}
function setup(){
    createCanvas(600, 450);
    catmario = new Catmario();
    soundClassifier.classify(gotCommand)
}

function gotCommand(error, results){
    if(error){
        console.error(error);
    }
    if(results[0].label == 'up'){
        catmario.jump();
    }
}

/*function keyPressed(){
    if(key == ' '){
        catmario.jump();
    }
}*/
function draw(){
    //elige un numero aleatorio, agrega un obstaculo
    if(random(1) < 0.005){
        obstaculos.push(new Obstaculo());
    }

    background(bImg);

    for(let o of obstaculos){
        o.move();
        o.show();
        if(catmario.hits(o)){
            console.log("game over");
            noLoop();
        }
    }

    catmario.show();
    catmario.move();

    
}