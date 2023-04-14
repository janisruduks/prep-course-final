import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { GameField } from "./GameField";

//https://www.figma.com/file/UFgFcP0uZHutwAn9O0vJai/CODELEX-SNAKE?node-id=0%3A1&t=jVVWmUyW6nU5czHO-1

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";
  isHoriz: Boolean = false;
  isVert: Boolean = true;

  setDirection(direction: Direction) {
    //needs a fix, spamming keys leads to eating itself
    if(direction === "Right" && this.isHoriz ){
      this.isHoriz = false
      this.isVert = true;
      this.direction = direction
    }else if(direction === "Left" && this.isHoriz ){
      this.isHoriz  = false
      this.isVert = true;
      this.direction = direction
    }else if(direction === "Up" && this.isVert){
      this.isVert = false;
      this.isHoriz  = true;
      this.direction = direction
    }else if(direction === "Down" && this.isVert){
      this.isVert = false;
      this.isHoriz  = true;
      this.direction = direction
    }
  }

  move() {
    let lastHeadPosition = new Cell(this.head.x, this.head.y);

    if (this.direction === "Right"){
      this.head.x++;
    }else if (this.direction === "Left"){
      this.head.x--;
    }else if (this.direction === "Up"){
      this.head.y--;
    }else if (this.direction === "Down"){
      this.head.y++;
    }
    this.tail.shift();
    this.tail.push(lastHeadPosition); 
    this.grow()
  }

//fix this asap
  grow() {
   const getApples = new GameField(); 
    for(let i = 0; i < getApples.apples.length; i++){
      if(this.head.x === getApples.apples[i].x && this.head.y === getApples.apples[0].y){
        let index = 0;
        while(index < 3){
          index++
          const growing = new Cell(this.tail[this.tail.length -1].x, this.tail[this.tail.length -1].y);
          this.tail.push(growing);
        }
      }
    }
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    for(const body of this.tail) {
      if (cell.x === body.x && cell.y === body.y) {
        return true;
      }
    }
    return false;
  }
}
