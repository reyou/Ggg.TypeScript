console.log('From main.js');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = electron;

let winone, wintwo;

ipcMain.on('openWindow', (_, pageName) => {
  let winThree = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  winThree.loadURL(`file://${__dirname}/${pageName}.html`);
  winThree.webContents.openDevTools();
});

function createWindow() {
  // https://www.electronjs.org/docs/api/browser-window
  winone = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  wintwo = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  winone.loadURL(`file://${__dirname}/one.html`);
  wintwo.loadURL(`file://${__dirname}/two.html`);
  winone.webContents.openDevTools();
  wintwo.webContents.openDevTools();

  winone.on('closed', () => {
    console.log({
      title: 'window-1-on-closed'
    });
    // this can be garbage collected
    winone = null;
  });

  wintwo.on('closed', () => {
    console.log({
      title: 'window-2-on-closed'
    });
    // this can be garbage collected
    wintwo = null;
  });
}

app.on('ready', () => {
  console.log({
    title: 'app-on-ready'
  });
  createWindow();
});

app.on('window-all-closed', () => {
  console.log({
    title: 'window-all-closed'
  });
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  console.log({
    title: 'app-on-activate'
  });
  if (winone == null) {
    createWindow();
  }
});
