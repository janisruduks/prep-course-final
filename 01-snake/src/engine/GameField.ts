import { Cell } from "./Cell";

export class GameField {
  apples: Cell[] = this.randomizeApples(); 

  randomizeApples(): Cell[] {
    this.apples = this.apples = [    
      new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
      new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
      new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
      new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
      new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
    ];
    return this.apples
  }

  seed(): void {
    this.apples = this.randomizeApples();
  }

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
