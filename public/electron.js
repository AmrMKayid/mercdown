const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev');
const path = require('path');


let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(isDev ? 
    'http://localhost:3000' : 
    `file://${path.join(__dirname, '../build/index.html')}`
  );

  app.setAboutPanelOptions({
    applicationName: "MercDown",
    applicationVersion: "0.0.1",
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})