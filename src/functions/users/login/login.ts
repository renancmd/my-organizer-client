import { loginUser } from "@/services/api/user/user";

function login(email: string, password: string) {
    loginUser({ email, password })
        .then(response => {
            if (response === "Login failed") {
                return false;
            } else {
                localStorage.setItem("token", response);
                window.location.href = "/";
            }
        });
}

export  {login };