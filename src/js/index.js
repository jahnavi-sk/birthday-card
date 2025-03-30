const { app, BrowserWindow, ipcMain } = require('electron');

const path = require('node:path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    frame: false,
    resizable: false,
    fullscreenable: false, 
    maximizable: false, 
    minimizable: true, 
    webPreferences: {
      preload: path.join(__dirname,  'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: true,
      
      devTools: false,

    },
  });

 
  // console.log("Loading file:", path.join(__dirname, "../html_files/index.html"));
  mainWindow.loadFile(path.join(__dirname, "../html_files/index.html"));
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});


ipcMain.on("load-index", () => {
  mainWindow.loadFile(path.join(__dirname, "../html_files/index.html"));
});

ipcMain.on("load-pg2", () => {
  mainWindow.loadFile(path.join(__dirname, "../html_files/pg2.html"));
});

ipcMain.on("load-pg3", () => {
  mainWindow.loadFile(path.join(__dirname, "../html_files/pg3.html"));
});

ipcMain.on("load-pg4", () => {
mainWindow.loadFile(path.join(__dirname, "../html_files/pg4.html"));
});

ipcMain.on("load-pg5", () => {
mainWindow.loadFile(path.join(__dirname, "../html_files/pg5.html"));
});

ipcMain.on("load-final", () => {
  mainWindow.loadFile(path.join(__dirname, "../html_files/final.html"));
});

ipcMain.on("load-main-page", () => {
mainWindow.loadFile(path.join(__dirname, "../html_files/index.html"));
});


ipcMain.on('minimize-app', () => {
  mainWindow.minimize();
});

ipcMain.on('close-app', () => {
  mainWindow.close();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
