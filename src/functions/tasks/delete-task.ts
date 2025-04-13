import { remove } from "@/services/api/tasks/task";

async function deleteTask(id: string) {
  await remove(id);
}

export { deleteTask };