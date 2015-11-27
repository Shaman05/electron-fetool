/**
 * Created by chenchao on 27/11/15.
 */

'use strict';

var conf = require('./conf.main');
var dialog = require('./dialog');
var electron = require('electron');
var Menu = electron.Menu;
var Tray = electron.Tray;

module.exports = function init(){
  var appIcon = new Tray(conf.ico);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: '关于前端助手 (About)',
      type: 'normal',
      //role: 'about',
      click: function(){
        dialog.msg({
          message: '关于前端助手',
          detail: [
            'version 1.0',
            'node version : ' + process.versions.node,
            'chrome version: ' + process.versions.chrome,
            'electron version : ' + process.versions.electron,
            'auth : Devin Chen',
            'gitHub: https://github.com/Shaman05/electron-fetool'
          ].join('\n')
        });
      }
    },
    {
      label: '设 置 (Setting)',
      type: 'normal',
      click: function(){
        //todo
        dialog.error();
      }
    },
    { type: 'separator' },
    {
      label: '退 出 (Quit)',
      accelerator: 'CmdOrCtrl+Q',
      type: 'normal',
      click: function(){
        electron.app.quit();
      }
    }
  ]);

  appIcon.setToolTip('Fetool - 前端助手');
  appIcon.setContextMenu(contextMenu);
};