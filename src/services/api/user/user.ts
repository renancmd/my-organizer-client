import api from '../api';

interface LoginData {
    email: string;
    password: string;
}

interface ShowData {
    email: string;
    name: string;
}

// Login
export async function loginUser(data: LoginData): Promise<string> {
    const response = await api.post("/auth/login", data);
    return response.data;
}

// Show user data
export async function getUserData(): Promise<ShowData> {
    const response = await api.get("/user/me", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return response.data[0];
}