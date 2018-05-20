// ---------- INTERFACES ----------
// An interface can be used to describe complex
// types

interface SuperHero {
  realName: String;
  superName: String;
}

var superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
};

// It is best to always separate with +
document.write(superman.realName + " is " + superman.superName + "<br />");

// More on interfaces below
