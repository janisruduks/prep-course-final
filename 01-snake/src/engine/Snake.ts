import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";
  isHoriz: Boolean = false;
  isVert: Boolean = true;

setDirection(direction: Direction) {
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

  if (this.direction === "Right") {
    this.head.x++;
  }else if (this.direction === "Left") {
    this.head.x--;
  }else if (this.direction === "Up") {
    this.head.y--;
  }else if (this.direction === "Down") {
    this.head.y++;
  }
  this.tail.shift();
  this.tail.push(lastHeadPosition); 
}


grow() {
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
  return false;
}}
