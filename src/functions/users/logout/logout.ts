function logout() {
    localStorage.removeItem('token');
    window.location.href = '/sign-in';
}

export { logout };