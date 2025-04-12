import { changeUserPassword } from "@/services/api/user/user";
import { logout } from "../logout/logout";

function changePassword(
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
) {
  const isDifferent = oldPassword !== newPassword;
  const isSame = newPassword === confirmPassword;
  const isNotEmpty =
    oldPassword !== "" && newPassword !== "" && confirmPassword !== "";

  if (!isNotEmpty) {
    return {
      error: true,
      errorMessage: "Preencha todos os campos",
    };
  } else if (!isDifferent) {
    return {
      error: true,
      errorMessage: "A nova senha não pode ser igual a senha atual",
    };
  } else if (!isSame) {
    return {
      error: true,
      errorMessage: "As senhas não conferem",
    };
  } else {
    changeUserPassword({ oldPassword, newPassword }).then((resp) => {
      logout();
    });
  }
}

export { changePassword };
