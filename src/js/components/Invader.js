import TextBox from './components/TextBox.js';
import SpaceShip from './SpaceShip.js';

export default class Invaders extends SpaceShip {
  constructor(ctx, width, height, x, y, color = 'red', elements = [], viewport, skin) {
    super(ctx, width, height, x, y, color = 'white', elements, viewport, 'invader', skin);
  }
}