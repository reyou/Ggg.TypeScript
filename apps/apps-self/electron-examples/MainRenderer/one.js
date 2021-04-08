console.log('From Renderer Process 1');
const electron = require('electron');

const { ipcRenderer } = electron;

const newWindowButton = document.getElementById('newWindowButton');
newWindowButton.addEventListener('click', () => {
  ipcRenderer.send('openWindow', 'three');
});
