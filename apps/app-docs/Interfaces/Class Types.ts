/*Implementing an interface
One of the most common uses of interfaces in languages like C# and Java, 
that of explicitly enforcing that a class meets a particular contract, 
is also possible in TypeScript. */

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
