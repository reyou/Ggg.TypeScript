function DirectionEnum() {
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }
}
function DirectionEnum2() {
  enum Direction {
    Up,
    Down,
    Left,
    Right
  }
}
function SampleEnum() {
  enum Response {
    No = 0,
    Yes = 1
  }

  function respond(recipient: string, message: Response): void {
    console.log("respond:");
    console.log(message);
  }

  respond("Princess Caroline", Response.Yes);
}
SampleEnum();
