import { deleteUser } from "@/services/api/user/user";
import { logout } from "../logout/logout";

function deleteUserData(password: string) {
    const data = {
        password: password,
    };
    deleteUser(data);
    logout();
}

export {  deleteUserData };