import { BrowserWindow, app } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";
const rootDir = `${__dirname}/../..`;
const ASSETS = `${rootDir}/src/assets`;

const isDevelopment = process.env.NODE_ENV !== 'production';

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;
let loaderWindow;

function createMainWindow() {
  const browserWindow = new BrowserWindow({
    minWidth: 800,
    width: 1200,
    height: 800,
    show: false,
    center: true,
    title: "Smartcloud",
    frame: false,
    icon: `${ASSETS}/img/icon.png`,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDevelopment) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log("An error occurred: ", err));
    browserWindow.webContents.openDevTools();
  }

  if (isDevelopment) {
    browserWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    browserWindow.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      })
    );
  }

  browserWindow.on('closed', () => {
    mainWindow = null;
  });

  browserWindow.once("ready-to-show", () => {
    loaderWindow.hide();
    browserWindow.show();
  });

  browserWindow.webContents.on('devtools-opened', () => {
    browserWindow.focus();
    setImmediate(() => {
      browserWindow.focus();
    });
  });

  return browserWindow;
}

function createLoader() {
  let loader = new BrowserWindow({
    width: 300,
    height: 300,
    center: true,
    show: false,
    title: "Smartcloud",
    frame: false,
    icon: `${ASSETS}/img/icon.png`,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  loader.loadFile(`${process.cwd()}/src/components/loader.html`);

  loader.on("closed", () => {
    loaderWindow = null;
    loader = null;
  });

  loader.once("ready-to-show", () => {
    loader.show();
  });

  const updates = setTimeout(() => {
    mainWindow = createMainWindow();
    clearTimeout(updates)
  }, 3000);
  return loader;
}


// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    // mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  loaderWindow = createLoader();
});
