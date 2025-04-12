import { updateUser } from "@/services/api/user/user";
import { logout } from "../logout/logout";
import { isValidEmail, isValidName } from "@/functions/generics/validations";

function updateUserData(email?: string, name?: string) {
  const emailValid = email ? isValidEmail(email) : false;
  const nameValid = name ? isValidName(name) : false;

  if (!emailValid || !nameValid) {
    return {
      email: emailValid,
      name: nameValid,
    }
  } else {
    updateUser({ email, name });
    logout();
  }
  
}

export { updateUserData };
