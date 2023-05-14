import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  auth: (credential: string) => ipcRenderer.invoke('auth', credential),
  print: (data: any) => ipcRenderer.invoke('print', data),
  quit: () => ipcRenderer.invoke('quit'),
  info: () => ipcRenderer.invoke('info'),
  backup: () => ipcRenderer.invoke('backup'),
  find: () => ipcRenderer.invoke('find'),
  duplicate: () => ipcRenderer.invoke('duplicate'),
  addMembership: () => ipcRenderer.invoke('addMembership'),
  latestMembershipRecord: () => ipcRenderer.invoke('latestMembershipRecord'),
  edit: () => ipcRenderer.invoke('edit'),
  delete: () => ipcRenderer.invoke('delete'),
  buy: () => ipcRenderer.invoke('buy'),
  renew: () => ipcRenderer.invoke('renew'),
  history: () => ipcRenderer.invoke('history'),
  printReport: () => ipcRenderer.invoke('printReport'),
});
