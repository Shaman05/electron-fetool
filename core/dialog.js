/**
 * Created by chenchao on 27/11/15.
 */

'use strict';

var electron = require('electron');
var dialog = electron.dialog || electron.remote.dialog;

module.exports = {
  //message box
  msg: function(opt){
    var options = opt || {};
    var buttons = options.buttons || [{label: 'OK', event: function(){}}];
    var button = ['OK'];
    var buttonFn = [function(){}];
    if(buttons.length > 0){
      button = [];
      buttonFn = [];
      for(var i = 0; i < buttons.length; i++){
        button.push(buttons[i]['label']);
        buttonFn.push(buttons[i]['event']);
      }
    }
    dialog.showMessageBox({
      //can be "none", "info", "error", "question" or "warning".
      type: options.type || 'info',
      title: options.title || 'System message',
      message: options.message || 'System message',
      detail: options.detail || 'This is system message box with none content!',
      buttons: button
    }, function(index){
      var fn = buttonFn[index];
      fn && fn();
    });
  },

  //error box
  error: function(title, content){
    dialog.showErrorBox(title || 'System error', content || 'This is a system error!');
  },

  //open file
  openFile: function(){
    dialog.showOpenDialog({
      properties: [ 'openFile', 'openDirectory', 'multiSelections', 'createDirectory' ],
      filters: [
        { name: 'Images', extensions: ['png'] }
      ]
    });
  },

  //save file
  saveFile: function(){
    dialog.showSaveDialog({
      title: 'save file title',
      defaultPath: 'fdsaf',
      filters: [
        { name: 'Images', extensions: ['png'] }
      ]
    });
  }
};