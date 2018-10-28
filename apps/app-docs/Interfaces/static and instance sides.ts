/*Instead, you would need to work with the static side of the class directly. 
In this example, we define two interfaces, ClockConstructor for the constructor 
and ClockInterface for the instance methods. Then for convenience we define 
a constructor function createClock that creates instances of the type that is 
passed to it. */
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface3;
}
interface ClockInterface3 {
  tick(): any;
}

class DigitalClock implements ClockInterface3 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface3 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface3 {
  return new ctor(hour, minute);
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
