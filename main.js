const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

// Allow chrome blacklisted GPUs
app.commandLine.appendSwitch('--ignore-gpu-blacklist');

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, './views/basic.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);
