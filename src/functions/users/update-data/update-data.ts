import { updateUser } from "@/services/api/user/user";
import { logout } from "../logout/logout";

function updateUserData(email?: string, name?: string) {
  const data = {
    email: email,
    name: name,
  };
  
  updateUser(data).then((token) => {
    console.log(token);
    logout();
  });
  
}

export { updateUserData };
