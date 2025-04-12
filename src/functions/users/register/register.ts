import { registerUser } from "@/services/api/user/user";

function register(email: string, name: string, password: string) {
    const data = {
        email: email,
        name: name,
        password: password,
    };
    registerUser(data);
    window.location.href = "/sign-in";
}

export { register };