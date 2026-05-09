const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path  = require('path');
const Store = require('./store');

const store = new Store();

// ── Window size constants ─────────────────────────────
const COMPACT_W = 260;
const COMPACT_H = 76;
const FULL_W    = 340;
const FULL_H    = 478;
const BULK_W    = 720;
const BULK_H    = 580;

let win         = null;
let currentMode = 'full';

// ── Drag state (main-process-side, no IPC per frame) ─
let dragActive  = false;
let dragOffX    = 0;   // cursor offset from window top-left at drag start
let dragOffY    = 0;
let dragRAF     = null;

function getWindowPos (mode, w, h) {
  const saved = store.get('pos_' + mode);
  if (saved) return saved;
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  if (mode === 'bulk') {
    return { x: Math.floor((width - w) / 2), y: Math.floor((height - h) / 2) };
  }
  return { x: width - w - 24, y: 24 };
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
    frame:         false,
    transparent:   false,
    backgroundColor: '#ffffff',
    alwaysOnTop:   true,
    skipTaskbar:   false,
    resizable:     true,
    hasShadow:     true,
    roundedCorners: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration:  false
    }
  });

  win.setAlwaysOnTop(true, 'floating');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: false });
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  win.on('moved',   savePos);
  win.on('resized', savePos);
}

function savePos () {
  if (!win) return;
  const [x, y] = win.getPosition();
  store.set('pos_' + currentMode, { x, y });
}

// ── Drag loop running entirely in main process ────────
// Called once per rAF tick — no IPC overhead per frame
function dragLoop () {
  if (!dragActive || !win) return;
  const cur  = screen.getCursorScreenPoint();
  const newX = cur.x - dragOffX;
  const newY = cur.y - dragOffY;
  win.setPosition(newX, newY);
  dragRAF = setTimeout(dragLoop, 6); // ~166fps cap, smooth & cheap
}

// ── IPC ──────────────────────────────────────────────

// Renderer sends ONE message on mousedown with the cursor offset
ipcMain.on('drag-start', (e, { offX, offY }) => {
  if (!win) return;
  dragOffX   = offX;
  dragOffY   = offY;
  dragActive = true;
  clearTimeout(dragRAF);
  dragLoop();
});

// Renderer sends ONE message on mouseup
ipcMain.on('drag-end', () => {
  dragActive = false;
  clearTimeout(dragRAF);
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
});

ipcMain.on('win-close',    () => { if (win) win.close(); });
ipcMain.on('win-minimize', () => {
  dragActive = false;
  clearTimeout(dragRAF);
  if (win) win.minimize();
});

ipcMain.handle('store-get',    (e, key)        => store.get(key));
ipcMain.handle('store-set',    (e, key, value) => { store.set(key, value); });
ipcMain.handle('store-delete', (e, key)        => { store.delete(key); });

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
