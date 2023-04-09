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
  it("Player should be able to take only free fields", () => {
    const game = new Game();

    game.onClick(1);
    game.onClick(1);
    expect(game.getCells()).toEqual([
      "-", "X", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });
  it("Players should be able to restart the game", () => {
    const game = new Game();

    game.onClick(4);
    expect(game.getTurn()).toBe("O");
    game.restart();
    expect(game.getTurn()).toBe("X")

  });
  it("Both players should be able to tie the game", () => {
    const game = new Game();

    expect(game.getTurn()).toBe("X");

    game.onClick(4);

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "X", "-",
      "-", "-", "-"
    ]);

    game.onClick(0);

    expect(game.getCells()).toEqual([
      "O", "-", "-",
      "-", "X", "-",
      "-", "-", "-"
    ]);

    game.onClick(1);
    game.onClick(2);
    game.onClick(3);
    game.onClick(5);
    game.onClick(6);
    game.onClick(7);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      'O', 'X', 'O',
      'X', 'X', 'O',
      'X', 'O', 'X'
    ]);

    expect(game.isTie()).toBe(true);
    expect(game.getWinner()).toBe("-");
  });
  it("Player should win if row is taken", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(9);
    game.onClick(1);
    game.onClick(2);
    expect(game.getWinner).toBe("X");
  });
  it("Player should win if column is taken", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(4);
    game.onClick(7);
    game.onClick(6);
    expect(game.getWinner).toBe("X");
  });
  it("Player should win if diagonal is taken", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(2);
    game.onClick(5);
    game.onClick(4);
    game.onClick(8);
    game.onClick(6);
    expect(game.getWinner).toBe("O");
  });
});


