const path = require('path');
const { app, BrowserWindow } = require('electron');
const { posix } = require('path');

//const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createMainWindow() {
  const { screen } = require('electron')

  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  mainWindow = new BrowserWindow({ title: 'Tackling Cyberbullying', width, height })
  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
  mainWindow.setMenuBarVisibility(false)
}

// function createMainWindow() {
//     const mainWindow = new BrowserWindow({
//         title: 'Tackling Cyberbullying',
//         width: 1000,
//         height: 600
//     });

//     //Open devtools if in dev env
//     //if (isDev) {
//       //  mainWindow.webContents.openDevTools();
//     //}

//     mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
// }

// let mainWindow=null

// app.whenReady().then(() => {
//   const { screen } = require('electron')

//   const primaryDisplay = screen.getPrimaryDisplay()
//   const { width, height } = primaryDisplay.workAreaSize

//   mainWindow = new BrowserWindow({ title: 'Tackling Cyberbullying', width, height })
//   mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
// })

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow();
        }
      });
});

app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
  })

  app.on('app-command', (e, cmd) => {
    if (cmd === 'browser-backward' && app.webContents.canGoBack()) {
      app.webContents.goBack()
    }
  })