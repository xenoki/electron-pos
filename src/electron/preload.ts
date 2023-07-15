import { contextBridge, ipcRenderer } from 'electron';
import { CHANNEL } from './channel';

/** Make sure only allow channel can be use to communicate to ipcMain */
const validChannels = Object.values(CHANNEL);

/** allow react to communicate with electron ipcMain */
contextBridge.exposeInMainWorld('api', {
  invoke: <T>(channel: CHANNEL, data: T): Promise<T> => {
    if (validChannels.includes(channel))
      return ipcRenderer.invoke(channel, data);
  },
  send: (channel: CHANNEL, data: any) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel: CHANNEL, callback: (data: any) => void) => {
    if (validChannels.includes(channel)) {
      const newCallback = (_: any, data: any) => callback(data);
      ipcRenderer.on(channel, newCallback);
    }
  },
  removeAllListeners: (channel: CHANNEL) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.removeAllListeners(channel);
    }
  },
});
