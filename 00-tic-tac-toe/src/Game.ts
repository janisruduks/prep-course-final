export type XO = "X" | "O" | "-";

export class Game {
  gameBoard: XO[];
  turn: XO;

  constructor(firstPlayer: XO = "X"){
    this.gameBoard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.turn = firstPlayer;
  }

  getCells(): XO[] {
    return this.gameBoard;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    //doesn't matter x or o, if not "-" of course
    //check all possible row, diagonal or column
    // - - -
    // - X - diagonal will be always middle
    // - - -

    // X - -
    // X - - row will be always have either 3
    // X - -

    // X X X
    // - - - col same as row
    // - - -
    return "-";
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
    if (this.gameBoard[i] === "-") {
      this.gameBoard[i] = this.getTurn();
      this.turn = this.turn === "X" ? "O" : "X";
      console.log(this.gameBoard);
    }
  }

  restart(): void {
    console.log("restart called");
  }
}
