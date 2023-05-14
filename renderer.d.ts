export interface Credential {
  username: string;
  password: string;
}

export interface AuthResponse {
  rowid: string;
  username: string;
}

export interface AuthError {
  error: string;
}

export interface AppInfo {
  version: string;
  name: string;
}

export interface IElectronAPI {
  auth: (credential: Credential) => Promise<AuthResponse>;
  print: (data: any) => Promise<void>;
  quit: () => Promise<void>;
  info: () => Promise<AppInfo>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
