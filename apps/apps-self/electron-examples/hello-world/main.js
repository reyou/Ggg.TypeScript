console.log('main process working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow() {
  // https://www.electronjs.org/docs/api/browser-window
  win = new BrowserWindow();

  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    console.log({
      title: 'window-on-closed'
    });
    // this can be garbage collected
    win = null;
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
