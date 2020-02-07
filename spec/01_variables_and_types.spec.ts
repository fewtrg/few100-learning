describe('declare variables', () => {
  it('an example', () => {
    const name = 'Betty';
    expect(name).toBe('Betty');
  });

  it('declare a variable with let', () => {
    let age: number | string;
    age = 25;
    age = 'old';
    // age = [0,1,2];
    let x: any;
    x = 2;
    x = 'two';
  });
});
