import { changeUserPassword } from "@/services/api/user/user";
import { logout } from "../logout/logout";

function changePassword(oldPassword: string, newPassword: string) {
    const data = {
        oldPassword: oldPassword,
        newPassword: newPassword,
    };
    changeUserPassword(data);
    logout();
} 

export { changePassword };