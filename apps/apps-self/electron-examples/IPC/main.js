console.log('main process working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const dialog = electron.dialog;

let win;

function createWindow() {
  // https://www.electronjs.org/docs/api/browser-window
  win = new BrowserWindow({
    // this is for make the require work in here..
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // this will be loaded initially
  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    console.log({
      title: 'window-on-closed'
    });
    // this can be garbage collected
    win = null;
  });
}

// this is main process event listener
ipc.on('async-message', (event) => {
  dialog.showErrorBox('An error message', 'Demo of an error message.');
  event.sender.send('async-reply', 'Main process opened the error dialog.');
});

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
