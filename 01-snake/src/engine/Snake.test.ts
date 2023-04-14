import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });
  it("should move head in right direction", () => {
    const snake = new Snake();

    snake.setDirection("Right");
    snake.move();

    expect(snake.getHead()).toEqual(new Cell(3, 0));
  });
  it("Shoulnd't be able to move left if snakes moves right", () => {
    const snake = new Snake();

    snake.setDirection("Right");
    snake.setDirection("Left")
    snake.move();
    snake.move();
    snake.setDirection("Left")
    snake.move();

    expect(snake.getHead()).toEqual(new Cell(5, 0));
  });
  it("should be able to move down and bend the tail", () => {
    const snake = new Snake();

    snake.setDirection("Down");
    snake.move()

    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });
  it('should grow when it eats an apple', () => { // will need to update this test after seed()
    const snake = new Snake();
    snake.head = new Cell(18, 16); //apple position
    snake.grow();

    expect(snake.tail.length).toBe(3);
  });
  it("Shouldn't be able to eat itself", () => {
    const snake = new Snake();
    snake.head = new Cell(1, 0);

    expect(snake.isTakenBySnake(snake.head)).toBe(true);
  });
});