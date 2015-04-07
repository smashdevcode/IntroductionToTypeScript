
var ProjectsViewModel = function() {
    var self = this,
        api = new API();

    self.currentView = ko.observable('Projects');
    self.editTitle = ko.observable();
    self.projects = ko.observableArray(api.getProjects());
    self.currentProject = ko.observable(getNewProject());

    self.addProject = function () {
        var project = getNewProject();

        // create an observable version of the project object
        self.currentProject(ko.mapping.fromJS(project));

        // set the edit title
        self.editTitle('Add Project');

        self.currentView('AddEditProject');
    };

    self.editProject = function (project) {
        var currentProject = ko.mapping.fromJS(project);

        // create an observable version of the project object
        self.currentProject(currentProject);

        // set the edit title
        self.editTitle('Edit Project');

        self.currentView('AddEditProject');
    };

    self.deleteProject = function (project) {
        self.projects.remove(project);

        api.saveProjects(self.projects());
    };

    self.saveProject = function () {
        var currentProject = self.currentProject(),
            project = ko.mapping.toJS(currentProject),
            projectToUpdate = findProjectById(project.projectId),
            projects = self.projects(),
            maxProject = -1;

        // if we have a project to update then replace the project in the list
        // otherwise add the project to the list
        if (projectToUpdate) {
            // replace the project in the list
            projects[projects.indexOf(projectToUpdate)] = project;
        } else {
            // determine the max id value
            maxProject = _.max(projects, function (project) {
                return project.projectId;
            });

            project.projectId = maxProject.projectId + 1;

            projects.push(project);
        }

        // save the projects
        api.saveProjects(projects);

        // update the list of projects
        self.projects(projects);

        self.currentView('Projects');
    };

    self.cancel = function () {
        self.currentView('Projects');
    };

    // private functions

    function getNewProject() {
        return {
            projectId: 0,
            name: ''
        };
    }

    function findProjectById(projectId) {
        var project = null;

        if (projectId) {
            project = ko.utils.arrayFirst(self.projects(), function (project) {
                return project.projectId === projectId;
            });
        }

        return project;
    }
};
