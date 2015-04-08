
# Introduction to TypeScript

## TODO

1. Convert demo app to TS and write up detailed instructions
1. Incorporate ideas from this sitepen article: [http://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/](http://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/)
1. Review 1.4 features (union types, let and const keywords)
1. Review 1.5 features

## Questions

1. Who is familiar with TypeScript?
1. Who has used TypeScript on a project?
1. What editor(s) do you use?
 1. Sublime Text?
 1. Atom?
 1. WebStorm?
 1. Visual Studio?
 1. Other?

## Agenda

* What is TypeScript?
 * Open source project on GitHub
* What is static typing?
 * Compare and contrast to dynamic typing
* Brief History of TypeScript
 * Launched in October 2012
 * ng-conf Announcement
 * Personally avoided TypeScript in order to get familiar with
 common JS design patterns
* What is Built in TypeScript?
  * Asana
  * Mozilla Flash
  * Visual Studio Online Editor
  * AngularJS 2.0
* Basic TypeScript Concepts
 * How to Compile a File
 * Optional static typing
 * Classes
 * Interfaces
 * Compiling to ES6
* Migrating an Existing App to TypeScript
 * No unit tests
 * No build
 * No module loader
* Next Steps
 * Slides and code on GitHub
 * Next Meetup meetings

## What is TypeScript?

Jonathan Turner at ng-conf answered that question with the following the list:

* Superset of JavaScript
* Optional type system
* Features from the future (ES6, ES7)

## Key TypeScript Features

* Supports standard JavaScript code
* Provides static typing
* Encapsulation through classes and modules
* Interfaces
* Anonymous functions
* Richer tooling support including static checking, symbol-based navigation,
statement completion, and code refactoring

## TypeScript Compiler and Tooling

Not just a command line compiler, but an API that provides a collection of
services that allows tooling support to be developed.

TypeScript support is available in:

* Sublime Text
* Atom [https://atom.io/packages/atom-typescript](https://atom.io/packages/atom-typescript)
* Emacs
* Vi
* WebStorm
* Visual Studio

## TypeScript Syntax

Since TypeScript is a superset of JavaScript, the syntax is the same as
JavaScript. You can take raw JavaScript code, paste it into a TypeScript file,
and TypeScript will just output the JavaScript as is.

## Keywords and Operators

* class
* constructor
* exports
* extends
* implements
* imports
* interface
* module
* public/private
* ... - rest parameter
* => - used for return types and inline function definitions
* <typeName>
* : - separator

## Code Hierarchy

* Module
 * Class, Interface
  * Fields, Constructor, Properties, Functions

# Compiler Demos

Demo: Show how to use the compiler from the command line

# Demo App

## Project Tracker

In order to keep the focus on TypeScript, the following choices were made:

* No SPA framework
* No build process

## Walkthrough of the Code

What could be better?

* All of the code is in the global namespace
* Assumptions are being made about the data types of parameters
* Imagine this project times a factor of 50... the problems just get worse

# Demos

## Agenda

1. Compiling
1. Type Inference
1. Functions
1. Interfaces
1. Classes
1. Casting Types
1. Type Definition Files
1. Extending Types
1. Using Interfaces
1. Extending Interfaces
1. Modules
1. Module Namespaces
1. Splitting Modules Across Multiple Files
1. Internal vs. External Modules
1. External Libraries and Frameworks
1. Debugging
1. Refactoring

## Compiling

TypeScript can be installed as a Node package and .ts files can then be
compiled using the compiler from the command line.

Demo: Show how to use the compiler from the command line

## Type Inference

When defining variables, the type can be inferred.

```
var numberValue = 2;
```

You can also explicitly define the type.

```
var numberValue: number = 2;
```

If you don't supply a type, then the type is set to "any". "any" is the base
type for all TypeScript types.

```
var anyValue;
```

When combining types, TypeScript will attempt to coerce the types to something
that works.

```
var stringValue = numberValue + 'some string';
```

This examples works because the type of "stringValue" is being inferred. If we
explicitly define the type as number, then the TypeScript compiler will
produce a compilation error.

```
var newNumberValue: number = numberValue + 'some string';
```

## Advantages of Static Typed Language

1. Referring to a variable or parameter that hasn't been defined results in
an error.
1. Passing an incorrect number of parameters to a function will result in an
error.
1. Passing incorrect data types to a function will result in an error.

## Dynamic vs. Static Typing

TODO

## Ambient Declaration

TODO

## Any Types

TODO

## Primitive Types

TODO

## Object Types

TODO

## Functions

1. Arrow Function Expressions
 1. TODO
1. Callback Functions
 1. TODO
1. Rest Parameters
 1. TODO

## Interfaces

1. Interfaces can be used for functions and object literals
1. Per the TypeScript handbook, do not prefix interface names with "I"
(see [http://www.typescriptlang.org/Handbook#writing-dts-files](http://www.typescriptlang.org/Handbook#writing-dts-files))

TODO

## Classes

Classes can contain the following members.

* Fields
* Constructors
* Properties
* Functions

Note: Properties are only available if you are targeting ES5.

TODO

## Casting Types

This will fail.

```
var table: HTMLTableElement = document.createElement('table');
```

This will succeed.

```
var table: HTMLTableElement = <HTMLTableElement>document.createElement('table');
```

## Type Definition Files

TypeScript includes `lib.d.ts` which provides type definitions for JavaScript
and the DOM.

You can get additional type definition files at
[github.com/borisyankov/DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped).

You can also create your own for any JavaScript libraries that you own.

## Extending Types

TypeScript abstracts away prototype inheritance with the "extends" keyword.

TODO

## Using Interfaces

Allows you to define the members (properties and methods) that should
be available on classes that implement that interface. Interfaces behave
similarly to data types, in that they are simply stripped out in the
resulting compiled JavaScript.

Interfaces can be used to define configuration objects that are passed as a
parameter to a method. This is possible due to support for implicitly
implemented interfaces (otherwise known as "duck typing").

TODO

## Extending Interfaces

TODO

## Modules

1. Can be contained in a single file or spread across multiple files
1. Modules can be nested
1. If you don't specify a module your code will be implicitly placed
into the global namespace
1. Modules get compiled into IIFEs

Demo: Show how code that you add without a module gets added to the
global namespace

Demo: Show how defining a module without exporting anything hides those
implementations from all code outside of the module

## Module Namespaces

1. Module names can contain dots (".")
1. When compiled the similarly named modules will get combined into a single
namespace

Demo: Show how namespaces can be used to organize code

Demo: Show how the "import" keyword can be used to import and alias
namespaces

## Splitting Modules Across Multiple Files

1. Add reference to the file that defines the module
1. Compiled .js files must be loaded in the correct order

Demo: Show how to split modules across multiple files

## Internal vs. External Modules

1. Internal
 1. Namespace like syntax
 1. Useful for grouping code
 1. No need to "import" them
1. External
 1. Separately loaded modules
 1. Must be imported explicitly

TypeScript supports both AMD and CommonJS modules though the compiler needs
to be configured properly.

Demo: Show how to use external modules and use RequireJS for module loading

## External Libraries and Frameworks

1. Show how to bring in the definitions for internal modules
1. Show how to bring in the definitions for external modules

Demo: Show how to find and add d.ts files and add them to your project

Demo: Show how to specify external libraries when using RequireJS

## Debugging

Debugging TypeScript in an IDE requires that you generate source map files.

Demo: Show how to configure the TypeScript compiler to generate source
map files.

## Refactoring

TypeScript enables reliable refactoring of your code base.

Demo: Show how you can easily rename a function across your entire application.

## TypeScript 1.4 Features

[http://blogs.msdn.com/b/typescript/archive/2015/01/16/announcing-typescript-1-4.aspx](http://blogs.msdn.com/b/typescript/archive/2015/01/16/announcing-typescript-1-4.aspx)

* Union Types
* Type Aliases
* Const Enums
* ES6 Support (ES6 output mode, let and const keyword support)
* Template Strings [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)

## TypeScript 1.5 Features

TODO

## TypeScript in Atom

* Support for projects with tsconfig.json
 * filesGlob
 * F6 build

TODO

## TypeScript in Sublime Text

TODO

## TypeScript in WebStorm

TODO

## TypeScript in Visual Studio

TODO
