/// <reference path="part.ts" />

class Game {
    constructor(){
        for(let row = 0; row<4; row++){
            for (let column = 0; column < 3; column++) {
                let p = new Part(row, column);
            }
        }
    }
}
let g = new Game();

