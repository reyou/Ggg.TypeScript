function AllTypesInUnion() {
  interface Bird {
    fly();
    layEggs();
  }

  interface Fish {
    swim();
    layEggs();
  }
  class Bronzini implements Fish {
    swim() {
      console.log("swimming...");
    }
    layEggs() {
      console.log("laying eggs...");
    }
  }
  function getSmallPet(): Fish | Bird {
    let bronzini = new Bronzini();
    return bronzini;
  }

  let pet = getSmallPet();
  pet.layEggs(); // okay
  // pet.swim(); // errors
}
