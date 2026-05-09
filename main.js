const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path  = require('path');
const Store = require('./store');

const store = new Store();

const COMPACT_W = 260;
const COMPACT_H = 76;
const FULL_W    = 340;
const FULL_H    = 478;
const BULK_W    = 720;
const BULK_H    = 580;

let win         = null;
let currentMode = 'full';
let dragActive  = false;
let dragOffX    = 0;
let dragOffY    = 0;
let dragTimer   = null;
let alwaysOnTopTimer = null;

function getWindowPos (mode, w, h) {
  const saved = store.get('pos_' + mode);
  if (saved) return saved;
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  if (mode === 'bulk') {
    return { x: Math.floor((width - w) / 2), y: Math.floor((height - h) / 2) };
  }
  return { x: width - w - 24, y: 24 };
}

function enforceAlwaysOnTop () {
  if (!win || win.isDestroyed()) return;
  win.setAlwaysOnTop(true, 'screen-saver');
  if (win.isMinimized()) win.restore();
  if (!win.isVisible()) win.show();
}

function createWindow () {
  const pos = getWindowPos('full', FULL_W, FULL_H);

  win = new BrowserWindow({
    x: pos.x,
    y: pos.y,
    width:  FULL_W,
    height: FULL_H,
    minWidth:  COMPACT_W,
    minHeight: COMPACT_H,
    frame:           false,
    transparent:     false,
    backgroundColor: '#ffffff',
    alwaysOnTop:     true,
    skipTaskbar:     false,
    resizable:       true,
    hasShadow:       true,
    roundedCorners:  true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration:  false
    }
  });

  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  win.on('moved',   savePos);
  win.on('resized', savePos);

  win.on('hide', () => {
    if (!win || win.isDestroyed()) return;
    win.show();
  });

  win.on('minimize', () => {
    if (!win || win.isDestroyed()) return;
    win.restore();
  });

  alwaysOnTopTimer = setInterval(enforceAlwaysOnTop, 1000);
}

function savePos () {
  if (!win || win.isDestroyed()) return;
  const [x, y] = win.getPosition();
  store.set('pos_' + currentMode, { x, y });
}

function dragLoop () {
  if (!dragActive || !win || win.isDestroyed()) return;
  const cur  = screen.getCursorScreenPoint();
  win.setPosition(cur.x - dragOffX, cur.y - dragOffY);
  dragTimer = setTimeout(dragLoop, 6);
}

ipcMain.on('drag-start', (e, { offX, offY }) => {
  if (!win) return;
  dragOffX   = offX;
  dragOffY   = offY;
  dragActive = true;
  clearTimeout(dragTimer);
  dragLoop();
});

ipcMain.on('drag-end', () => {
  dragActive = false;
  clearTimeout(dragTimer);
  savePos();
});

ipcMain.on('set-mode', (e, mode) => {
  if (!win) return;
  savePos();
  currentMode = mode;

  const pos = getWindowPos(mode,
    mode === 'compact' ? COMPACT_W : mode === 'bulk' ? BULK_W : FULL_W,
    mode === 'compact' ? COMPACT_H : mode === 'bulk' ? BULK_H : FULL_H
  );

  if (mode === 'compact') {
    win.setResizable(false);
    win.setMinimumSize(COMPACT_W, COMPACT_H);
    win.setBounds({ x: pos.x, y: pos.y, width: COMPACT_W, height: COMPACT_H }, true);
  } else if (mode === 'bulk') {
    win.setResizable(true);
    win.setMinimumSize(500, 420);
    win.setBounds({ x: pos.x, y: pos.y, width: BULK_W, height: BULK_H }, true);
  } else {
    win.setResizable(true);
    win.setMinimumSize(COMPACT_W, 380);
    win.setBounds({ x: pos.x, y: pos.y, width: FULL_W, height: FULL_H }, true);
  }

  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
});

ipcMain.on('win-close', () => {
  clearInterval(alwaysOnTopTimer);
  dragActive = false;
  clearTimeout(dragTimer);
  if (win) win.close();
});

ipcMain.on('win-minimize', () => {
  dragActive = false;
  clearTimeout(dragTimer);
});

ipcMain.handle('store-get',    (e, key)        => store.get(key));
ipcMain.handle('store-set',    (e, key, value) => { store.set(key, value); });
ipcMain.handle('store-delete', (e, key)        => { store.delete(key); });

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  clearInterval(alwaysOnTopTimer);
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
