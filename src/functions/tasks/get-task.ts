import { getAll } from "@/services/api/tasks/task";

function getTasks() {
    const tasks = getAll();
    return tasks;
}    

    export { getTasks };