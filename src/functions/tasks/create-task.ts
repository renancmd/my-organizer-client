import { create } from "@/services/api/tasks/task";
import { currentDate } from "../generics/currentDate";

async function createTask(name: string) {
    const task = {
        name: name,
        description: "",
        date: currentDate()
    };
    await create(task);
}

export { createTask };