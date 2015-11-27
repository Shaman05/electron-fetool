/**
 * Created by chenchao on 27/11/15.
 */

'use strict';

//main config
var conf = require('./core/conf.main');

//tray
var tray = require('./core/tray');

//module to control application life.
var app = require('app');

//module to create native browser window.
var BrowserWindow = require('browser-window');

//electron
var electron = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  //create tray
  tray();

  //create the browser window.
  mainWindow = new BrowserWindow(conf.mainWin);

  //and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  //is open the DevTools?
  conf.debug && mainWindow.webContents.openDevTools();

  //emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
