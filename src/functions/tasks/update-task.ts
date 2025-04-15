import { UpdateTaskProps }from "@/modules/tasks/types/task";
import { update } from "@/services/api/tasks/task";

function updateTask(id: string, task: UpdateTaskProps) {
    update(id, {name: task.name, description: task.description, date: task.date})
}

export { updateTask };