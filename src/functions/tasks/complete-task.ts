import { complete } from "@/services/api/tasks/task";

async function completeTask(id: string, done: boolean) {
    await complete(id, done);
}

export { completeTask }