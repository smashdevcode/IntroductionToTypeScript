
# Migrating the Demo App to TypeScript

## Rename Files

Rename all of the .js files to .ts

## Fix External References

Install the TypeScript Definition manager for DefinitelyType by running the
following command:

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

## Fix Internal References

Add references to files as needed:

```
/// <reference path="projects-view-model.ts" />
```

## Fix projects-view-model.ts Issues

1. Update the `getProjectViewModel()` function's `project` parameter to have
a default value of `null`.
1. Add references to `api.ts`, `project-view-model.ts`, and `models/project.ts`
1. Update the `findProjectById()` and `getNextProjectId()` functions to use
the appropriate generic Knockout.js and lodash functions

## Fix project-view-model.ts Issues

1. Extend the lodash definition to include `sum()` function
1. Update the `getProjectTotalHours()` and `getProjectTotalCompletedHours()`
functions to properly handle Knockout.js observables

## Convert Model Functions Into Classes

1. Convert the `models/project.ts` and `models/project-task.ts` functions
into classes
