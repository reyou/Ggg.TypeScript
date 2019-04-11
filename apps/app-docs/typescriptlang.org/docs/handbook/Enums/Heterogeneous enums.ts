/*Technically enums can be mixed with string and numeric members, 
but it’s not clear why you would ever want to do so: */
/*Unless you’re really trying to take advantage of JavaScript’s 
runtime behavior in a clever way, it’s advised that you don’t do this. */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}
