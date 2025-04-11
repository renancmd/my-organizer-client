import { getUserData } from "@/services/api/user/user";

async function showUserData() {
    const userData = await getUserData(); 
    return userData;
}

export { showUserData };