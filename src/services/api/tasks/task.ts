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

// Update task
export async function update(id: string, task: TaskCreate): Promise<string> {
    const response = await api.put(`/tasks/${id}`, task);
    return response.data;
}

// Remove task
export async function remove(id: string): Promise<string> {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
}

// Complete task
export async function complete(id: string, done: boolean): Promise<string> {
    const response = await api.put(`/tasks/${id}/done`, {done});
    return response.data;
}