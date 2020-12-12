export interface User {
  username: string;
  password: string;
}

export function isUser(obj: any): obj is User {
  return !!obj && !!obj.username && !!obj.password;
}
