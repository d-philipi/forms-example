export interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string | null;
}