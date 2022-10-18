// Check if user is logged in
export const isLoggedIn = () => localStorage.getItem('token') ? true : false;

// Load token
export const getToken = () => localStorage.getItem('token') ? localStorage.getItem('token') : null;
export const getUser = () => localStorage.getItem('user') ? localStorage.getItem('user') : null;

// Login user by storing user data
export const loginUtil = (user, token) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
}

// Logout user by removing all user data
export const logoutUtil = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}