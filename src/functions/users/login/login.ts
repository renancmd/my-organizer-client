import { loginUser } from "@/services/api/user/user";

function login(email: string, password: string) {
    const data = {
        email,
        password
    };
        loginUser(data)
        .then(response => {
                localStorage.setItem('token', response);
                window.location.href = '/';
            })
            .catch(error => {
                console.log(error);
            })
}

export {login};