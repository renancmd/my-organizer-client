import { loginUser } from "@/services/api/user/user";

async function login(email: string, password: string): Promise<boolean> {
  try {
    const response = await loginUser({ email, password });

    if (response === "Login failed") {
      return false;
    }

    localStorage.setItem("token", response);
    return true; // sucesso
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return false;
  }
}

export { login };
