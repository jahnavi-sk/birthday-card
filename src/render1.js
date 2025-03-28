const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
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
    mainWindow.loadFile(path.join(__dirname, "index.html"));
});

ipcMain.on("load-pg2", () => {
    mainWindow.loadFile(path.join(__dirname, "pg2.html"));
});

ipcMain.on("load-pg3", () => {
    mainWindow.loadFile(path.join(__dirname, "pg3.html"));
});

ipcMain.on("load-final", () => {
    mainWindow.loadFile(path.join(__dirname, "final.html"));
});

ipcMain.on('minimize-app', () => {
    mainWindow.minimize();
});

ipcMain.on('close-app', () => {
    mainWindow.close();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
