describe('functions', () => {
  describe('declaring functions', () => {
    it('has 3 ways to do', () => {
      //1. named

      //2. anonymous - 2 syntax

      const add = function(a: number, b: number) {
        return a + b;
      };

      // 3. arrow
      const multiply = (a: number, b: number) => a * b;
      expect(add(3, 4)).toBe(7);
      expect(multiply(3, 4)).toBe(12);
    });
  });

  describe('arguments passed into function', () => {
    it('does not have overloading', () => {
      function formatName(first: string, last: string, mi?: string) {
        let firstPart = `${last}, ${first}`;
      }
    });
  });
});
