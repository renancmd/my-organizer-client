import api from '../api';

interface RegisterData {
    email: string;
    name: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}

interface ShowData {
    email: string
    name: string;
}

interface UpdateData {
    email?: string | null;
    name?: string | null;
}

interface ChangePassword {
    oldPassword: string;
    newPassword: string;
}

// Register
export async function registerUser(data: RegisterData): Promise<string> {
    const response = await api.post("/auth/register", data);
    return response.data;
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

// Update user data
export async function updateUser(data: UpdateData): Promise<string> {
    const response = await api.put("/user/update", data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    return response.data;
}

// Change password
export async function changeUserPassword(data: ChangePassword): Promise<string> {
    const response = await api.put("/user/password", data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return response.data;
}