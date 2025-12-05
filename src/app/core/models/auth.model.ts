export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  userType: string;
}
