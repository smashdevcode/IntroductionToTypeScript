/// <reference path="project-task.ts" />
var Project = (function () {
    function Project(projectId, name, description, tasks) {
        if (projectId === void 0) { projectId = 0; }
        if (name === void 0) { name = ''; }
        if (description === void 0) { description = ''; }
        if (tasks === void 0) { tasks = []; }
        this.projectId = projectId;
        this.name = name;
        this.description = description;
        this.tasks = tasks;
    }
    return Project;
})();
