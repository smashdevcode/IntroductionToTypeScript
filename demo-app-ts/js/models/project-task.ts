/// <reference path="../../typings/knockout/knockout.d.ts" />

interface IProjectTask {
    name: string|KnockoutObservable<string>;
    completed: boolean|KnockoutObservable<boolean>;
    hours: number|KnockoutObservable<number>;
}

class ProjectTask implements IProjectTask {
    constructor(public name: string = '',
                public completed: boolean = false,
                public hours: number = 0) {
    }
}
