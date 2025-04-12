import api from "../api";

interface TaskCreate {
    name: string;
    description?: string | null;
    date?: string | null;
}

// Create a new task
export async function create(task: TaskCreate): Promise<string> {
    const response = await api.post("/tasks", task);
    return response.data;
}

// Get all tasks
export async function getAll(): Promise<string> {
    const response = await api.get("/tasks", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    return response.data;
}