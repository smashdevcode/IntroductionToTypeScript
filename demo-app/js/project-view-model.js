
var ProjectViewModel = function (project) {
    var self = this;

    self.project = project || new Project();
    self.name = ko.observable(project ? project.name : '');
    self.tasks = (project ?
        ko.mapping.fromJS(project.tasks) : ko.observableArray([]));

    self.getUpdatedProject = function () {
        var project = new Project();

        project.projectId = self.project.projectId;
        project.name = self.name();
        project.tasks = ko.mapping.toJS(self.tasks());

        return project;
    };

    self.addTask = function () {
        var projectTask = new ProjectTask();

        self.tasks.push(ko.mapping.fromJS(projectTask));
    };

    self.deleteTask = function (task) {
        self.tasks.remove(task);
    };
};
