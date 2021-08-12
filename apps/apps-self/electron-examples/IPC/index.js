const electron = require('electron');
const ipc = electron.ipcRenderer;

const asyncBtn = document.getElementById('asyncBtn');
asyncBtn.addEventListener('click', () => {
  ipc.send('async-message');
});

ipc.on('async-reply', (event, arg) => {
  console.log({
    title: `${arg} sent from main process.`,
    event
  });
});
