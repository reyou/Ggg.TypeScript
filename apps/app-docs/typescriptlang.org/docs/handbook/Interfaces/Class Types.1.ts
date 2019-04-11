/*You can also describe methods in an interface 
that are implemented in the class, as we do with 
setTime in the below example: */
interface ClockInterface2 {
  currentTime: Date;
  setTime(d: Date): any;
}

class Clock2 implements ClockInterface2 {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  printTime() {
    console.log(this.currentTime);
  }
  constructor(h: number, m: number) {
    this.currentTime = new Date(h, m);
  }
}

let clock2 = new Clock2(12, 15);
clock2.printTime();
