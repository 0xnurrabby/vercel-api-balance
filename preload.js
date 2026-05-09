const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // Smooth drag — main process polls cursor, no per-frame IPC
  dragStart:   (offX, offY) => ipcRenderer.send('drag-start', { offX, offY }),
  dragEnd:     ()           => ipcRenderer.send('drag-end'),

  // Window control
  setMode:     (mode) => ipcRenderer.send('set-mode', mode),
  close:       ()     => ipcRenderer.send('win-close'),
  minimize:    ()     => ipcRenderer.send('win-minimize'),

  // Persistent storage
  storeGet:    (key)        => ipcRenderer.invoke('store-get', key),
  storeSet:    (key, value) => ipcRenderer.invoke('store-set', key, value),
  storeDelete: (key)        => ipcRenderer.invoke('store-delete', key),
});
