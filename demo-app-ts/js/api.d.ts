
interface APIProject {
    projectId: number;
    name: string;
    description: string;
    tasks: APIProjectTask[];
}

interface APIProjectTask {
    name: string;
    hours: number;
    completed: boolean;
}

interface API {
    getProjects(): APIProject[];
    saveProjects(projects: APIProject[]): void;
}

declare var api: API;
