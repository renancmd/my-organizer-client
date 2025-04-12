import { update } from "@/services/api/tasks/task";

function updateTask(id: string, task: any) {
    update(id, {name: task.name, description: task.description, date: task.date})
}

export { updateTask };