
export interface RegisterData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: "student" | "teacher";
}

export interface LoginData {
    email: string;
    password: string;
}