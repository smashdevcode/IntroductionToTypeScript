/// <reference path="project-task.ts" />

class Project {
    constructor(public projectId: number = 0,
                public name: string = '',
                public description: string = '',
                public tasks: ProjectTask[] = []) {
    }
}
