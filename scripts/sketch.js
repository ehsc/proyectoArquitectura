let personaje;
let bImg;
let obstaculos = [];
let soundClassifier;
let spritespersonaje = [];
let spritesobstaculo = [];
let audio_hit = new Audio("/sounds/hit.ogg")


function preload(){
    const options = {probabilityThreshold:0.9};//pocentaje de que tan cercano esta al sonido
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);//modulo preentrenado con sonidos up, down
    bImg = loadImage('/images/Background.png');
    for(let i =1; i <= 24; i++){
        spritesobstaculo.push(loadImage('/images/obstaculo/o'+i+'.png'));
    }
    for(let i =1; i <= 15; i++){
        spritespersonaje.push(loadImage('/images/personaje/p'+i+'.png'));
    }
    

}
function setup(){
    createCanvas(800, 450);
    personaje = new Personaje();
    soundClassifier.classify(gotCommand)
    frameRate(20);
}

function gotCommand(error, results){
    if(error){
        console.error(error);
    }
    console.log(results[0].label, results[0].confidence);
    if(results[0].label == 'up'){
        personaje.jump();
    }
}
/*
function keyPressed(){
    if(key == ' '){
        personaje.jump();
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
        if(personaje.hits(o)){
            console.log("game over");
            audio_hit.play();
            noLoop();
        }
    }

    personaje.show();
    personaje.move();

    
}