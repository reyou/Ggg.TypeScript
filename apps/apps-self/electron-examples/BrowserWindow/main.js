console.log('main process working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win, dimWindow, colorWindow, framelessWindow;
let parentWindow, childWindow;

function createWindow() {
  // https://www.electronjs.org/docs/api/browser-window
  /*  win = new BrowserWindow();
  dimWindow = new BrowserWindow({
    width: 400,
    height: 400,
    maxWidth: 600,
    maxHeight: 600
  });
  colorWindow = new BrowserWindow({
    backgroundColor: '#ccc'
  });
  framelessWindow = new BrowserWindow({
    backgroundColor: '#800000',
    frame: false
  });*/
  parentWindow = new BrowserWindow({
    title: 'parent'
  });
  childWindow = new BrowserWindow({
    parent: parentWindow,
    show: false,
    title: 'child',
    modal: true
  });
  childWindow.loadURL('https://www.google.com');
  childWindow.once('ready-to-show', () => {
    childWindow.show();
  });
  childWindow.on('closed', () => {
    console.log({
      title: 'child-window-closed'
    });
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
