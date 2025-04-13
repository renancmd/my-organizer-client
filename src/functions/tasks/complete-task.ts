import { complete } from "@/services/api/tasks/task";

export async function completeTask(id: string, done: boolean) {
    complete(id, done);
}