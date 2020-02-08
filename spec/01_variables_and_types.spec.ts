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

  it('const shallow immutable', () => {
    const favoriteNumbers: Array<string | number> = [2, 5, 8];
    const movie = {
      title: 'This rise of the demon',
      yearReleased: 2020
    };
    movie.title = 'abc';

    interface Movie {
      title: string;
      yearReleased: 2020;
    }
    // structure typing: 12:44
    // union literals
  });
  it('initializing a variable defines the type', () => {
    const age /*: string | number*/ = 50;
    // age = 'old ; // will now give an error
  });

  describe('a bit about string', () => {
    it('can be demilimited by single or double', () => {
      const story = 'she said hello';
      const author = "David O'Brian";
    });

    it('string literals - interpreted string', () => {
      const name = 'Bill';
      const age = 26;

      /*if you want to call the string use the backtick in the string  and in the expect functions*/
      const story = `chapter 1
        a long time ago ... `;
      const message = 'The name is ' + name + ' and the age is ' + age + '.';
      const message2 = `The name is ${name} and the age is ${age}.`;
      //   const message3 = 'The name is ${name} and the age is ${age}.'; // this will fail because of quote marks instead of back ticks
      expect(message).toBe(message2);
    });
  });

  describe('number literals', () => {
    it('number literals', () => {
      const bigNumber = 123_456_789.23; // here the _ represent commas in the 1,000 place

      const color = 0xff;
      const permissions = 0o33;
      const binary = 0b0101010;
    });
    it('array destructuring', () => {
      const friends = ['David', 'Sean', 'amy'];

      // const first = friends[0];
      // const last = friends[2];
      const [first, , last] = friends;

      expect(first).toBe('David');
      expect(last).toBe('amy');
    });

    it('destructuring with ...rest', () => {
      const todos = ['Clean Garage', 'Fix tire', 'mop floors'];
      const [next, ...others] = todos; // the rest operator

      expect(next).toBe('Clean Garage');
      expect(others).toEqual(['Fix tire', 'mop floors']);
    });
    it('tuples - basic example', () => {
      let stuff: [boolean, number];
      stuff = [true, 140];
    });
    it('oop function return values', () => {
      interface NameResult {
        fullName: string;
        length: number;
      }
      function formatName(first: string, last: string): NameResult {
        const fullName = `${last}, ${first}`;
        return {
          fullName,
          length: fullName.length
        };
      }
      const answer = formatName('Hannah', 'Soloist');
      expect(answer.fullName).toBe('Soloist, Hannah');
      expect(answer.length).toBe(15);
    });

    it('truthy/falsy', () => {
      type NameResult = [string, number];

      function formatName(first: string, last: string): NameResult {
        const fn = `${last}, ${first}`;
        return [fn, fn.length];
      }

      const [fullName, length] = formatName('Luke', 'Skywalker');
      expect(fullName).toBe('Skywalker, Luke');
      expect(length).toBe(15);
    });

    it('a truth table', () => {
      expect(true).toBeTruthy();
      expect(false).toBeFalsy();
      expect('').toBeFalsy();
      expect(' ').toBeTruthy();
      expect(undefined).toBeFalsy();
      expect(null).toBeFalsy();
      expect(0).toBeFalsy();
      expect(-1).toBeTruthy();
      // this means if you use one of these as a predicate in an if statement, you will get either true or false.
      // e.g.
      if ('tacos') {
        // it is true!
      }
    });

    it('enums', () => {
      enum SeatType {
        window,
        aisle,
        middle
      }

      function getSeatForTicket(ticketNumber: number): SeatType {
        if (ticketNumber % 2 === 0) {
          return SeatType.window;
        } else {
          return SeatType.aisle;
        }
      }

      const getMySeat = getSeatForTicket(108);
      let cost = 0;
      switch (getMySeat) {
        case SeatType.window: {
          cost = 100;
          break;
        }
        case SeatType.aisle: {
          cost = 150;
          break;
        }
        case SeatType.middle: {
          cost = 75;
          break;
        }

        default: {
          //something
        }
      }
      expect(cost).toBe(100);
    });
  });
});
