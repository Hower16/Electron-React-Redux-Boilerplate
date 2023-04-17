const path = require('path');
const os = require('os');
const fs = require('fs');
const { app, BrowserWindow, Menu, ipcMain, shell} = require('electron');
const url = require('url');

process.env.NODE_ENV = 'development';

const isDevelopment = process.env.NODE_ENV === 'development';
const isMac = process.platform === 'darwin';

let mainWindow;
let aboutWindow;



// Create the main window
function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Electron React Redux Boilerplate',
        width: isDevelopment ? 1000 : 500,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            //preload: path.join(__dirname, 'preload.js'),
        },
    });

    const startUrl = isDevelopment
    ? path.join(__dirname, '/renderer/index.html')   
    : path.join(__dirname, '/dist/index.html');
        
    console.log(isDevelopment);

    // Open devtools if in dev env
    if(isDevelopment){
        mainWindow.webContents.openDevTools();
    }

    // mainWindow.webContents.session.clearCache().then(() => {
    //     console.log('Cache cleared');
    //   });

    mainWindow.loadFile(startUrl);
}


// App is ready
app.whenReady().then(() => {
    createMainWindow();
    
    // Implement menu
    // const mainMenu = Menu.buildFromTemplate(menu);
    // Menu.setApplicationMenu(mainMenu);

    // Remove mainWindow from memory on close
    mainWindow.on('closed', () => (mainWindow = null));

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
});

// Menu template
// const menu = [
//     ...(isMac ? [{
//         label: app.name,
//         submenu: [
//             {
//                 label: 'About',
//                 click: createAboutWindow
//             }
//         ]
//     }] : []),
//     {
//         role: 'fileMenu',
//     },
//     ...(!isMac ? [{
//         label: 'Help',
//         submenu: [
//             {
//                 label: 'About',
//                 click: createAboutWindow
//             }
//         ]
//     }] : [])
// ];

app.on('window-all-closed', () => {
    if (!isMac) {
    app.quit()
    }
});
