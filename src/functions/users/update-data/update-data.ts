import { updateUser } from "@/services/api/user/user";

function updateUserData(email?: string, name?: string) {
  const data = {
    email: email,
    name: name,
  };
  
  updateUser(data).then((token) => {
    console.log(token);
    localStorage.removeItem("token");
    window.location.href = "/sign-in";
  });
  
}

export { updateUserData };
