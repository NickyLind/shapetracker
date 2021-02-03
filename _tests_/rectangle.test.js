import Rectangle from '../src/js/rectangle.js';

describe('Rectangle', () =>   {

  test('should correctly create a rectangle object using two sides', () => {
    const rectangle = new Rectangle(3,5);
    expect(rectangle.getArea()).toEqual(15);
  });
});