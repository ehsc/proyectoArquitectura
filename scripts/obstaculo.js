class Obstaculo{
    constructor(){
        this.r = 50//comienza en el borde
        this.x = width;
        this.y = height - this.r; 
    }

    //funcion de movimiento
    move(){
        this.x -= 5;//velocidad avanzan los obstaculos
    }

    show(){
        //image(oImg, this.x, this.y, this.r, this.r);
        image(spritesobstaculo[frameCount % 24], this.x, this.y, this.r, this.r);
        
    }
}