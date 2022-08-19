class Personaje{

    constructor(){
        
        this.r = 100;
        this.x = 50;  //posicion
        this.y = height - this.r;
        this.vy = 0;//velocidad a lo largo del eje
        this.gravity = 2;//gravedad
    }

    jump(){
        //solo saltar si esta en el suelo
        if(this.y == height - this.r){
            this.vy = -35;
        }
    }

    hits(obstaculo){
        //colision entre circulos
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = obstaculo.x + obstaculo.r * 0.5;
        let y2 = obstaculo.y + obstaculo.r * 0.5;

        return  collideCircleCircle(x1, y1, 50, x2, y2, obstaculo.r);
    }

    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show(){
        image(spritespersonaje[frameCount % 15], this.x, this.y, this.r, this.r);
        
    }
}