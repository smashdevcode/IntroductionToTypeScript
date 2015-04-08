
var API = function () {
    var self = this;

    self.getProjects = function () {
        var projectsString = localStorage.getItem('projects');

        if (projectsString) {
            return JSON.parse(projectsString);
        } else {
            return [];
        }
    };

    self.saveProjects = function (projects) {
        var projectsString = JSON.stringify(projects);

        localStorage.setItem('projects', projectsString);
    };
};
