declare global {
  interface Window {
    api: {
      invoke: <T>(channel: CHANNEL | string, data?: any) => Promise<T>;
      on: (channel: CHANNEL, callback: (data: any) => void) => void;
      send: (channel: CHANNEL, data: any) => void;
      removeAllListeners: (channel: CHANNEL) => void;
    };
  }
}

export enum CHANNEL {
  APP_INFO = 'app:info',
  PRINT_TEST = 'print:test',
  PRINT = 'print',
  LOGIN = 'login',
  BACKUP = 'backup',
  QUIT = 'quit',
  FIND_MEMBERSHIP = 'find:membership',
  FIND_DUPLICATE_ACCOUNT = 'find:duplicate:account',
  ADD_MEMBERSHIP = 'add:membership',
  LAST_RECORD = 'last:record',
  DELETE_MEMBERSHIP = 'delete:membership',
  EDIT_MEMBERSHIP = 'edit:membership',
  BUY_GALLON = 'buy:gallon',
  AUTHENTICATE = 'authenticate',
  RENEW_GALLON = 'renew:gallon',
  PRINT_REPORT = 'print:report',
  HISTORY = 'history',
}

export interface Credential {
  username: string;
  password: string;
}
export interface AuthData {
  rowid: string;
  username: string;
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
