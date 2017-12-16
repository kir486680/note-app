
const electron = require('electron');
const {autoUpdater} = require("electron-updater");

const {app, BrowserWindow} = electron;

var mainWindow;
app.on('ready', function() {
    // Create the browser window.
     mainWindow = new BrowserWindow({width: 900, height: 600});

    // and load the index.html of the app.
   mainWindow.loadURL('file://' + __dirname + '/index.html');
   mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.show();
});
    // Emitted when the window is closed.
    mainWindow.on('closed', function() {

        mainWindow = null;
    });
    autoUpdater.checkForUpdates();
});
autoUpdater.on('update-downloaded', (info) => {
    win.webContents.send('updateReady')
});

// when receiving a quitAndInstall signal, quit and install the new version ;)
ipcMain.on("quitAndInstall", (event, arg) => {
    autoUpdater.quitAndInstall();
})
