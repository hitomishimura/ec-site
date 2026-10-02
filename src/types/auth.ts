export interface SigninRequest {
  email: string;
  password: string;
}

export interface SigninError {
  field: string;
  reason: string;
}

export interface SigninData {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface SigninResponse {
  code: number;
  message: string;
  errors: SigninError[];
  data: SigninData;
}
