//=============================================================================
http://www.typescriptlang.org/docs/handbook/modules.html
//=============================================================================
Starting with ECMAScript 2015, JavaScript has a concept of modules.
TypeScript shares this concept.
Modules are executed within their own scope, not in the global scope; this means
that variables, functions, classes, etc. declared in a module are not visible
outside the module unless they are explicitly exported using one of the export
forms. Conversely, to consume a variable, function, class, interface, etc.
exported from a different module, it has to be imported using one of the import
forms.
//=============================================================================
