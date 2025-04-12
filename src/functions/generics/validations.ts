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

export { isValidEmail, isValidName, isValidPassword };