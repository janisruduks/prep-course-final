import { Cell } from "./Cell";

export class GameField {
  apples: Cell[]  

  constructor(){
    this.apples = [    
      new Cell(18, 16),
      new Cell(20, 16),
      new Cell(22, 16),
      new Cell(24, 16) ];
  }

  seed(): void {}

  getApples(): Cell[] {
    return this.apples
  }

  isAppleInside(cell: Cell): boolean {
    for(const apple of this.apples) {
      if (cell.x === apple.x && cell.y === apple.y) {
        return true;
      }
    }
    return false;
  }

  removeApple(cell: Cell): void {
    for(const apple of this.apples) {
      const index = this.apples.indexOf(apple)
      if (cell.x === apple.x && cell.y === apple.y) {
        this.apples.splice(index, 1);
      }
    }
  }

  isEmpty(): boolean {
    if(this.apples.length === 0){
      return true;
    }else {
      return false;
    }
  }
}
