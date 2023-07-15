import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface AppInfo {
  version: string;
  name: string;
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

export const getAppInfo = createAsyncThunk('info/getAppInfo', async () => {
  return await window.api.invoke<AppInfo>(CHANNEL.APP_INFO);
});

// Define a type for the slice state
interface InfoState {
  name: string;
  version: string;
}

// Define the initial state using that type
const initialState: InfoState = {
  name: '',
  version: '',
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateVersion: (state, action: PayloadAction<string>) => {
      state.version;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppInfo.pending, (state, action) => {
        console.log('pending', action.payload);
      })
      .addCase(
        getAppInfo.fulfilled,
        (state, action: PayloadAction<AppInfo>) => {
          console.log('fulfilled', action.payload);
          state.name = action.payload.name;
          state.version = action.payload.version;
        }
      );
  },
});

/** Redux Actions */
export const { updateName, updateVersion } = infoSlice.actions;

/** Redux Slice Selectors */
export const selectInfo = (state: RootState) => state.info;
export const selectName = createSelector(selectInfo, (info) => info.name);
export const selectVersion = createSelector(
  [selectInfo],
  (info) => info.version
);

export default infoSlice.reducer;
