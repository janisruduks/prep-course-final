import { Level } from "./levels";

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
  rowsCount(): number {
    return this.level.rows
  }

  getCells(): Cell[][] {

    let cellRow: Cell[] = []
    let cellCollumn: Cell[][] = []
    const mine = new Cell();

    for(let i = 0; i < this.columnsCount(); i++){
      cellRow.push(mine)
    } for(let index = 0; index < this.rowsCount(); index++){
      cellCollumn.push(cellRow);
    }
    return cellCollumn;
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
