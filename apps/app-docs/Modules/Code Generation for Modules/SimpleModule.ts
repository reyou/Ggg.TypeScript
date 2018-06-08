import m = require("./mod");
export let t = m.something + 1;
if (require.main === module) {
  console.log(t);
}
