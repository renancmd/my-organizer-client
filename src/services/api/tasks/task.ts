import api from "../api";

interface TaskCreate {
    name: string;
    description?: string | null;
    date?: string | null;
}

export async function create(task: TaskCreate): Promise<string> {
    const response = await api.post("/tasks", task);
    return response.data;
}