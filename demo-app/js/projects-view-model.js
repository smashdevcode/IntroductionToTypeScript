
var ProjectsViewModel = function() {
    var self = this;

    self.projects = ko.observableArray([
        { name: 'Project 1' },
        { name: 'Project 2' },
        { name: 'Project 3' }
    ]);
};
