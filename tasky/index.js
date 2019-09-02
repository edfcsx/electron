const path = require('path');
const electron = require('electron');
const MainWindow = require('./app/main_window');
const TimerTray = require('./app/timer_tray');

const { app, ipcMain } = electron;

let mainWindow;
let tray;

app.on('ready', () => {

  mainWindow = new MainWindow({
    height: 600,
    width: 300,
    frame: false,
    resizable: false,
    show: false,
    webPreferences: { 
      nodeIntegration: true 
    },
  }, `file://${__dirname}/src/index.html`);


  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  tray = new TimerTray(iconPath, mainWindow);
});

app.on('before-quit', () => {
  tray.destroy();
});

ipcMain.on('update-timer', (event, timeLeft) => {
  console.log(timeLeft);
});
