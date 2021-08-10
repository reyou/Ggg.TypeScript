console.log('main process working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;
let parentWindow;

function createWindow() {
  parentWindow = new BrowserWindow({
    title: 'parent',
    width: 500,
    height: 150,
    frame: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  parentWindow.loadURL(`file://${__dirname}/index.html`);
  parentWindow.webContents.openDevTools();
  parentWindow.on('ready-to-show', () => {
    parentWindow.show();
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
  if (win == null) {
    createWindow();
  }
});
