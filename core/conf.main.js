/**
 * Created by chenchao on 27/11/15.
 */

'use strict';

var path = require('path');

function conf(){
  return {
    //ico
    ico: path.join(__dirname, 'ico.png'),

    //main window
    mainWin: {
      width: 1000,
      height: 800,
      title: 'Front end tool',
      frame: true,
      transparent: false
    },

    //isDebug(if true will open the DevTools)
    debug: true
  };
}

module.exports = conf();