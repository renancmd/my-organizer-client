import { registerUser } from "@/services/api/user/user";

function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name: string) {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    return nameRegex.test(name);
}

function isValidPassword(password: string) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

function register(email: string, name: string, password: string, confirmPassword: string) {
    const emailValid = isValidEmail(email);
    const nameValid = isValidName(name);
    const passwordValid = isValidPassword(password);
    const confirmPasswordValid = password === confirmPassword;

    if (emailValid && nameValid && passwordValid && confirmPasswordValid) {
        registerUser({ email, name, password });
        window.location.href = "/sign-in";
    } else {
        return {
            email: emailValid,
            name: nameValid,
            password: passwordValid,
            confirmPassword: confirmPasswordValid
        };
        
    }
}


export { register };