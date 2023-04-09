export type XO = "X" | "O" | "-";

export class Game {
  gameBoard: XO[];
  turn: XO;
  players: XO;

  constructor(firstPlayer: XO = "X"){
    this.gameBoard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.turn = firstPlayer;
    this.players = "X", "O";
  }

  getCells(): XO[] {
    return this.gameBoard;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    //just check for winner
    return "-";
  }

  isTie(): boolean {
    return !this.gameBoard.includes("-");
  }

  onClick(i: number): void {
    if (this.gameBoard[i] === "-") {
      this.gameBoard[i] = this.getTurn();
      this.turn = this.turn === "X" ? "O" : "X";
      console.log(this.gameBoard);
    }
  }

  restart(): void {
    this.gameBoard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.turn = "X";
  }
}
