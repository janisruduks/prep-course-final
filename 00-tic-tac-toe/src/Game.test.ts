import { Game } from "./Game";

/**
 * 
  - a game is over when all fields in a row are taken by a player
  - players take turns taking fields until the game is over
  - a game is over when all fields in a diagonal are taken by a player
  - a game is over when all fields are taken
  - there are two players in the game (X and O)
  - a game has nine fields in a 3x3 grid
  - a game is over when all fields in a column are taken by a player
  - a player can take a field if it is not already taken
 */

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
});