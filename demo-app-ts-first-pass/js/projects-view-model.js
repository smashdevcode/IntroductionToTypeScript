/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/lodash/lodash.d.ts" />
/// <reference path="api.ts" />
/// <reference path="project-view-model.ts" />
/// <reference path="models/project.ts" />
var ProjectsViewModel = function () {
    var self = this, api = new API();
    self.currentView = ko.observable('Projects');
    self.editTitle = ko.observable();
    self.projects = ko.observableArray(api.getProjects());
    self.currentProject = ko.observable(getProjectViewModel());
    self.addProject = function () {
        var projectViewModel = getProjectViewModel();
        self.currentProject(projectViewModel);
        self.editTitle('Add Project');
        self.currentView('AddEditProject');
    };
    self.editProject = function (project) {
        var projectViewModel = getProjectViewModel(project);
        self.currentProject(projectViewModel);
        self.editTitle('Edit Project');
        self.currentView('AddEditProject');
    };
    self.deleteProject = function (project) {
        self.projects.remove(project);
        api.saveProjects(self.projects());
    };
    self.saveProject = function () {
        var currentProjectViewModel = self.currentProject(), project = currentProjectViewModel.getUpdatedProject(), projectToUpdate = findProjectById(project.projectId), projects = self.projects();
        if (projectToUpdate) {
            projects[projects.indexOf(projectToUpdate)] = project;
        }
        else {
            project.projectId = getNextProjectId();
            projects.push(project);
        }
        api.saveProjects(projects);
        self.projects(projects);
        self.currentView('Projects');
    };
    self.cancel = function () {
        self.currentView('Projects');
    };
    function getProjectViewModel(project) {
        if (project === void 0) { project = null; }
        return new ProjectViewModel(project);
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
    function getNextProjectId() {
        var projects = self.projects(), maxProject;
        if (projects.length > 0) {
            maxProject = _.max(projects, function (project) {
                return project.projectId;
            });
            return maxProject.projectId + 1;
        }
        else {
            return 1;
        }
    }
};
