const electron = require('electron');

const { BrowserWindow, app } = electron;

class MainWindow extends BrowserWindow {
  constructor(options, url) {
    super(options);

    this.on('blur', this.onBlur.bind(this));

    this.loadURL(url);

    process.platform === 'win32' ? this.setSkipTaskbar(true) : app.dock.hide();
  }

  onBlur() {
    this.hide();
  }
}

module.exports = MainWindow;
