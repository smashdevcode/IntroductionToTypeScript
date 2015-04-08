/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/lodash/lodash.d.ts" />
/// <reference path="api.ts" />
/// <reference path="project-view-model.ts" />
/// <reference path="models/project.ts" />

var ProjectsViewModel = function() {
    var self = this,
        api = new API();

    self.currentView = ko.observable('Projects');
    self.editTitle = ko.observable();
    self.projects = ko.observableArray(api.getProjects());
    self.currentProject = ko.observable(getProjectViewModel());

    self.addProject = function () {
        var projectViewModel = getProjectViewModel();

        // set the current project
        self.currentProject(projectViewModel);

        // set the edit title
        self.editTitle('Add Project');

        self.currentView('AddEditProject');
    };

    self.editProject = function (project) {
        var projectViewModel = getProjectViewModel(project);

        // create an observable version of the project object
        self.currentProject(projectViewModel);

        // set the edit title
        self.editTitle('Edit Project');

        self.currentView('AddEditProject');
    };

    self.deleteProject = function (project) {
        self.projects.remove(project);

        api.saveProjects(self.projects());
    };

    self.saveProject = function () {
        var currentProjectViewModel = self.currentProject(),
            project = currentProjectViewModel.getUpdatedProject(),
            projectToUpdate = findProjectById(project.projectId),
            projects = self.projects();

        // if we have a project to update then replace the project in the list
        // otherwise add the project to the list
        if (projectToUpdate) {
            // replace the project in the list
            projects[projects.indexOf(projectToUpdate)] = project;
        } else {
            // set the project id to the next available id
            project.projectId = getNextProjectId();

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

    function getProjectViewModel(project = null) {
        return new ProjectViewModel(project);
    }

    function findProjectById(projectId) {
        var project = null;

        if (projectId) {
            project = ko.utils.arrayFirst<Project>(self.projects(), function (project) {
                return project.projectId === projectId;
            });
        }

        return project;
    }

    function getNextProjectId() {
        var projects = self.projects(),
            maxProject;

        if (projects.length > 0) {
            // determine the max id value
            maxProject = _.max<Project>(projects, function (project) {
                return project.projectId;
            });

            return maxProject.projectId + 1;
        } else {
            return 1;
        }
    }
};
