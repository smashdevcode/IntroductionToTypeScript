/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../typings/lodash/lodash.d.ts" />
/// <reference path="models/project.ts" />
/// <reference path="models/project-task.ts" />

declare module _ {
    interface LoDashStatic {
        /**
         * @param collection The collection to iterate over.
         * @param callback The function called per iteration.
         * @param thisArg The this binding of callback.
         * @return Returns the sum of the values.
         **/
        sum<T>(
            collection: Array<T>,
            callback?: ListIterator<T, any>,
            thisArg?: any): T;

        /**
         * @see _.sum
         **/
        sum<T>(
            collection: List<T>,
            callback?: ListIterator<T, any>,
            thisArg?: any): T;

        /**
         * @see _.sum
         **/
        sum<T>(
            collection: Dictionary<T>,
            callback?: ListIterator<T, any>,
            thisArg?: any): T;

        /**
         * @see _.sum
         * @param pluckValue _.pluck style callback
         **/
        sum<T>(
            collection: Array<T>,
            pluckValue: string): T;

        /**
         * @see _.sum
         * @param pluckValue _.pluck style callback
         **/
        sum<T>(
            collection: List<T>,
            pluckValue: string): T;

        /**
         * @see _.sum
         * @param pluckValue _.pluck style callback
         **/
        sum<T>(
            collection: Dictionary<T>,
            pluckValue: string): T;

        /**
         * @see _.sum
         * @param whereValue _.where style callback
         **/
        sum<W, T>(
            collection: Array<T>,
            whereValue: W): T;

        /**
         * @see _.sum
         * @param whereValue _.where style callback
         **/
        sum<W, T>(
            collection: List<T>,
            whereValue: W): T;

        /**
         * @see _.sum
         * @param whereValue _.where style callback
         **/
        sum<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T;
    }
}

var ProjectViewModel = function (project) {
    var self = this;

    self.project = project || new Project();
    self.name = ko.observable(project ? project.name : '');
    self.description = ko.observable(project ? project.description : '');
    self.tasks = (project ? ko.mapping.fromJS(project.tasks) : ko.observableArray([]));

    self.getUpdatedProject = function () {
        var project = new Project();

        project.projectId = self.project.projectId;
        project.name = self.name();
        project.description = self.description();
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

    self.getProjectTotalHours = function (tasks) {
        return _.sum<IProjectTask>(tasks, function (task) {
            if (typeof task.hours === 'function') {
                return (<KnockoutObservable<number>>task.hours)();
            } else {
                return task.hours;
            }
        });
    };

    self.getProjectTotalCompletedHours = function (tasks) {
        return _.sum<IProjectTask>(tasks, function (task) {
            if (typeof task.hours === 'function') {
                return (<KnockoutObservable<boolean>>task.completed)() ?
                    (<KnockoutObservable<number>>task.hours)() : 0;
            } else {
                return task.completed ? task.hours : 0;
            }
        });
    };

    self.getProjectTotalRemainingHours = function (tasks) {
        var totalHours = self.getProjectTotalHours(tasks),
            completedHours = self.getProjectTotalCompletedHours(tasks);

        return totalHours - completedHours;
    };

    self.projectPercentComplete = function (project) {
        var totalHours = self.getProjectTotalHours(project.tasks),
            completedHours = self.getProjectTotalCompletedHours(project.tasks);

        if (totalHours > 0) {
            return ((completedHours / totalHours) * 100).toFixed(0) + '%';
        } else {
            return 'N/A';
        }
    };

    self.projectTotalHours = ko.computed(function () {
        var tasks = self.tasks();

        return self.getProjectTotalHours(tasks);
    });

    self.projectTotalCompletedHours = ko.computed(function () {
        var tasks = self.tasks();

        return self.getProjectTotalCompletedHours(tasks);
    });

    self.projectTotalRemainingHours = ko.computed(function () {
        var tasks = self.tasks();

        return self.getProjectTotalRemainingHours(tasks);
    });
};
