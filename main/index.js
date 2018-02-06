const {app, Menu, BrowserWindow} = require("electron");
const electron = require("electron");
const path = require("path");
const {format} = require("url");
const prepareNext = require("electron-next");
const {resolve} = require("app-root-path");
const isDev = require("electron-is-dev");

require("electron-reload")(__dirname);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

async function createWindow() {
  await prepareNext("./renderer");

  var displays = electron.screen.getAllDisplays();

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    x: displays[1].bounds.x + 50,
    y: displays[1].bounds.y + 50
  });

  const devPath = "http://localhost:8000/index";
  const prodPath = format({
    pathname: resolve("renderer/out/start/index.html"),
    protocol: "file:",
    slashes: true
  });

  const url = isDev ? devPath : prodPath;

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  win.loadURL(url);
  win.maximize();
  require("./menu");
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
