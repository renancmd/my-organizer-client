import { getAll } from "@/services/api/tasks/task";

async function getTasks() {
    const tasks = await getAll();
    return tasks;
}    

    export { getTasks };