/// <reference path="../../typings/knockout/knockout.d.ts" />
var ProjectTask = (function () {
    function ProjectTask(name, completed, hours) {
        if (name === void 0) { name = ''; }
        if (completed === void 0) { completed = false; }
        if (hours === void 0) { hours = 0; }
        this.name = name;
        this.completed = completed;
        this.hours = hours;
    }
    return ProjectTask;
})();
//# sourceMappingURL=project-task.js.map