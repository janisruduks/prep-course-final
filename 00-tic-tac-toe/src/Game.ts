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
  //https://ibb.co/LdcjJpP
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7],[2, 5, 8],
        [0, 4, 8], [2, 4, 6]
        ];

    const checkForWinner = winConditions.map((winContition) => {
        if(winContition.every(cell => this.gameBoard[cell] === "X")){
            return "X";
        }
        else if(winContition.every(cell => this.gameBoard[cell] === "O")){
            return "O";
        }else {
            return "-";
        }
    });

    if(checkForWinner.includes("X")){
      return "X";
    }
    else if(checkForWinner.includes("O")){
      return "O";
    }else {
      return "-";
    }
}

  isTie(): boolean {
    return !this.gameBoard.includes("-");
  }

  onClick(i: number): void {
    if (this.gameBoard[i] === "-") {
      this.gameBoard[i] = this.getTurn();
      this.turn = this.turn === "X" ? "O" : "X";
    }
  }

  restart(): void {
    this.gameBoard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.turn = "X";
  }
}
