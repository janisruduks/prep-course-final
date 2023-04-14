import { GameField } from "./GameField";
import { Cell } from "./Cell";

describe("GameField", () => {
  let gameField: GameField;

  beforeEach(() => {
    gameField = new GameField();
  });

  describe("randomizeApples", () => {
    it("should return an array of 5 cells", () => {
      const result = gameField.randomizeApples();
      expect(result.length).toBe(5);
      result.forEach((cell) => {
        expect(cell).toBeInstanceOf(Cell);
      });
    });
  });

  describe("seed", () => {
    it("should reset the apples array", () => {
      gameField.apples = [new Cell(0, 0), new Cell(1, 1)];
      gameField.seed();
      expect(gameField.apples.length).toBe(5);
    });
  });

  describe("getApples", () => {
    it("should return the apples array", () => {
      const result = gameField.getApples();
      expect(result).toBe(gameField.apples);
    });
  });

  describe("isAppleInside", () => {
    it("should return true if the cell is an apple", () => {
      const cell = gameField.apples[0];
      const result = gameField.isAppleInside(cell);
      expect(result).toBe(true);
    });

    it("should return false if the cell is not an apple", () => {
      const cell = new Cell(0, 0);
      const result = gameField.isAppleInside(cell);
      expect(result).toBe(false);
    });
  });

  describe("removeApple", () => {
    it("should remove the apple at the specified cell", () => {
      const cell = gameField.apples[0];
      gameField.removeApple(cell);
      expect(gameField.apples.includes(cell)).toBe(false);
    });
  });

  describe("isEmpty", () => {
    it("should return false if there are apples", () => {
      expect(gameField.isEmpty()).toBe(false);
    });

    it("should return true if there are no apples", () => {
      gameField.apples = [];
      expect(gameField.isEmpty()).toBe(true);
    });
  });
});