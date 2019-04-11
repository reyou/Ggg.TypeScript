function UserDefinedTypeGuards() {
  interface Bird {
    fly(): any;
    layEggs(): any;
  }

  interface Fish {
    swim(): any;
    layEggs(): any;
  }
  class Bronzini implements Fish {
    swim() {
      console.log("swimming...");
    }
    layEggs() {
      console.log("laying eggs...");
    }
  }
  function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
  }

  // Both calls to 'swim' and 'fly' are now okay.
  let pet = new Bronzini();
  if (isFish(pet)) {
    pet.swim();
  } else {
    // pet.fly();
  }
}
