const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// 预加载脚本的路径
const PRELOAD_SCRIPT_PATH = path.join(__dirname, 'preload.js');

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: PRELOAD_SCRIPT_PATH, // 指定预加载脚本
      // 允许在渲染进程中使用 Node.js 功能
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // 加载您的 React 应用
  win.loadFile('dist/index.html');

  // 打开开发者工具
  win.webContents.openDevTools();
}

// 当 Electron 应用准备好时创建窗口
app.whenReady().then(createWindow);

// 当所有窗口都被关闭时，退出应用（除了 macOS）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 当用户点击 dock 图标时，如果没有任何窗口打开，则打开一个新窗口
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// 这里可以添加 IPC 通信的事件监听器
ipcMain.on('channel-name', (event, arg) => {
  console.log(arg);  // 打印从渲染进程发送的数据
});