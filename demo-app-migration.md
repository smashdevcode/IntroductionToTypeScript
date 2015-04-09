
# Migrating the Demo App to TypeScript

## Add tsconfig.json File

Compiler options listed at: [https://github.com/Microsoft/TypeScript/wiki/Compiler-Options](https://github.com/Microsoft/TypeScript/wiki/Compiler-Options)

Note: Prefer to disallow implicit "any" types.

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "amd",
        "declaration": false,
        "noImplicitAny": true,
        "removeComments": true,
        "noLib": false,
        "sourceMap": true
    },
    "filesGlob": [
        "./**/*.ts"
    ],
    "files": [
    ]
}
```

## Rename Files

Rename the following .js files to .ts:

* models/project.js
* models/project-task.js
* main.js
* projects-view-model.js

In WebStorm 10, open one of these files and use the links that appear in the
top right hand corner to configure the TS compiler.

## Fix External References

Now we need to add our missing references. Install the TypeScript Definition
manager for DefinitelyType by running the following command:

```
$ npm install tsd -g
```

Then query for available definition files:

```
$ tsd query knockout
```

Then to install a definition file:

```
$ tsd query knockout --action install
```

Repeat this for the following libraries:

1. knockout
1. knockout.mapping
1. lodash

<!-- ## Fix Internal References

Add references to files as needed:

```
/// <reference path="projects-view-model.ts" />
``` -->

## Add API d.ts file

Add the TypeScript definition file for the API function.

```
interface API {
    getProjects(): any;
    saveProjects(projects: any[]): void;
}

declare var api: API;
```

## Add custom lodash d.ts

The `sum()` function is missing from the lodash d.ts file, so we'll need
to add our own definition. Add a `lodash-sum.d.ts` file to the project with the
following code:

```

declare module _ {
    interface LoDashStatic {
        /**
         * @param collection The collection to iterate over.
         * @param callback The function called per iteration.
         * @param thisArg The this binding of callback.
         * @return Returns the sum of the values.
         **/
        sum<T>(
            collection: Array<T>,
            callback?: ListIterator<T, number>,
            thisArg?: any): number;

        /**
         * @see _.sum
         **/
        sum<T>(
            collection: List<T>,
            callback?: ListIterator<T, number>,
            thisArg?: any): number;

        /**
         * @see _.sum
         **/
        sum<T>(
            collection: Dictionary<T>,
            callback?: ListIterator<T, number>,
            thisArg?: any): number;

        /**
         * @see _.sum
         * @param pluckValue _.pluck style callback
         **/
        sum<T>(
            collection: Array<T>,
            pluckValue: string): number;

        /**
         * @see _.sum
         * @param pluckValue _.pluck style callback
         **/
        sum<T>(
            collection: List<T>,
            pluckValue: string): number;

        /**
         * @see _.sum
         * @param pluckValue _.pluck style callback
         **/
        sum<T>(
            collection: Dictionary<T>,
            pluckValue: string): number;

        /**
         * @see _.sum
         * @param whereValue _.where style callback
         **/
        sum<W, T>(
            collection: Array<T>,
            whereValue: W): number;

        /**
         * @see _.sum
         * @param whereValue _.where style callback
         **/
        sum<W, T>(
            collection: List<T>,
            whereValue: W): number;

        /**
         * @see _.sum
         * @param whereValue _.where style callback
         **/
        sum<W, T>(
            collection: Dictionary<T>,
            whereValue: W): number;
    }
}
```

## Fix Other Issues

1. Update the Project and ProjectTask functions data parameters to be optional
1. Extend the lodash d.ts to include the `sum()` function
1. Add data types to the Project total functions
1. Add parameter data type to the Project total functions
1. Add IProject and IProjectTask interfaces and explicitly type
local variables where needed

We should be compiling now :)

## Add Additional Interfaces to the API d.ts File

Add APIProject and APIProjectTask interfaces

```

interface APIProject {
    projectId: number;
    name: string;
    description: string;
    tasks: APIProjectTask[];
}

interface APIProjectTask {
    name: string;
    hours: number;
    completed: boolean;
}

interface API {
    getProjects(): APIProject[];
    saveProjects(projects: APIProject[]): void;
}

declare var api: API;
```

## Convert Model Functions Into Classes

Convert the Project and ProjectTask functions into classes.

Important: Show the difference between inline function and fat arrow function
declarations.

Important: To compensate for moving functions to be defined on the prototype
the Knockout bindings need to be updated like this:

```
data-bind="click: currentProject().addTask.bind(currentProject())"
```

## Convert the View Model Function to a Class

Convert the ProjectsViewModel function to a class.

## Add Internal Modules???
