import { create } from "@/services/api/tasks/task";
import { currentDate } from "../generics/currentDate";

function createTask(name: string) {
    const task = {
        name: name,
        description: "",
        date: currentDate()
    };
    create(task);
}

export { createTask };