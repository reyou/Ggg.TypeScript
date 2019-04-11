/*As we mentioned earlier, interfaces can describe the rich types 
present in real world JavaScript. Because of JavaScript’s dynamic and 
flexible nature, you may occasionally encounter an object that works as 
a combination of some of the types described above.
One such example is an object that acts as both a function and an object, 
with additional properties: */
interface CounterHybrid {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): CounterHybrid {
  let counter = <CounterHybrid>function(start: number) {
    console.log(start);
  };
  counter.interval = 123;
  counter.reset = function() {
    counter.interval = 0;
  };
  return counter;
}

let cCounterHybrid = getCounter();
cCounterHybrid(10);
cCounterHybrid.reset();
cCounterHybrid.interval = 5.0;
