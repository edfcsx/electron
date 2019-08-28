const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      { 
        label: 'New Todo'
      },
      { 
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click() {
          app.quit();
        }
      },
    ]
  }
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}