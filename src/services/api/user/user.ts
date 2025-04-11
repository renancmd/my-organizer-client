import api from '../api';

interface LoginData {
    email: string;
    password: string;
}

export async function loginUser(data: LoginData): Promise<string> {
    const response = await api.post("/auth/login", data);
    return response.data;
}