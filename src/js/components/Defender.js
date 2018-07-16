import TextBox from './TextBox.js';
import SpaceShip from './SpaceShip.js';

export default class Defender extends SpaceShip {
  constructor(ctx, width, height, x, y, color, elements = [], viewport, skin) {
    super(ctx, width, height, x, y, 'green', elements = [], viewport, 'defender', skin);
  }
}