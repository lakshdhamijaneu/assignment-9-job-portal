export interface User {
  fullName: string;
  email: string;
  password?: string;
  _id?: string;
}

export interface LoginResponse {
  message: string;
  user: User;
}
