import { remove } from "@/services/api/tasks/task";

function deleteTask(id: string) {
  remove(id);
}

export { deleteTask };