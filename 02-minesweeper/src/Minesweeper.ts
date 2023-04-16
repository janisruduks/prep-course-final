import { Level } from "./levels";
//https://www.figma.com/file/JBO8gJuuKh1NXpW9EtAEyQ/Untitled?node-id=0%3A1&t=gpwZ4ihQhn1wJr3D-1

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;
}

export class Minesweeper {
  private level: Level;

  constructor(level: Level) {
    this.level = level;
  }

  columnsCount(): number {
    return this.level.columns;
  }

  getCells(): Cell[][] {
    let cellCollumns: Cell[][] = [];
    for (let i = 0; i < this.columnsCount(); i++){
      let cellRow: Cell[] = [];
      for(let i = 0; i < this.columnsCount(); i++){
        const cell = new Cell();
        cellRow.push(cell);
      }
      cellCollumns.push(cellRow);
    }
    return cellCollumns;
  }

  onLeftMouseDown(x: number, y: number) {
    console.log(x, y)
  }

  onLeftMouseUp(x: number, y: number) {
    console.log(x, y)
  }

  onRightMouseUp(x: number, y: number) {
    console.log(x, y)
  }

  isTense(): boolean {
    return false;
  }

  timePassed(): number {
    
    return 999;
  }

  minesLeftCount() {
    return this.level.mines;
  }

  reset() {}

  currentLevel(): Level {
    return this.level
  }

  selectLevel(level: Level) {
   this.level = level
   return this.level;
  }

  isLost(): boolean {
    return false;
  }

  isWon(): boolean {
    return false;
  }

  isQuestionMarksEnabled(): boolean {
    return false;
  }

  toggleQuestionMarksEnabled() {
  }
}
