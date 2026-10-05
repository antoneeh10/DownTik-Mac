const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const { autoUpdater } = require('electron-updater');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 850,
    height: 650,
    // Memasang ikon baru beresolusi spesifik pada window dan taskbar aplikasi
    icon: path.join(__dirname, 'build/512x512.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Menyembunyikan menu bar bawaan (File, Edit, View, dll)
  mainWindow.setMenu(null);

  mainWindow.loadFile('index.html');

  // Mengalihkan klik tautan halaman internal ke browser bawaan Linux (Firefox/Chrome)
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (url !== mainWindow.webContents.getURL()) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // Mengalihkan klik tautan target="_blank" (jendela baru) ke browser bawaan Linux
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  // Logika Pemisahan Saluran Pembaruan Berdasarkan Versi package.json
  const currentVersion = app.getVersion();
  if (currentVersion.includes('-beta')) {
    autoUpdater.allowPrerelease = true;
    autoUpdater.channel = 'beta';
  } else {
    autoUpdater.allowPrerelease = false;
    autoUpdater.channel = 'latest';
  }

  // Mulai mengecek pembaruan via GitHub API secara otomatis
  autoUpdater.checkForUpdatesAndNotify();
});

// --- LOGIKA CORE PENGUNDUH VIDEO TIKTOK ---
ipcMain.on('download-tiktok-video', async (event, tiktokUrl) => {
  try {
    event.reply('download-status', 'Menganalisis tautan video...');
    
    // Request ke API publik untuk mengambil file video MP4 tanpa watermark
    const apiUrl = `https://tikwm.com{encodeURIComponent(tiktokUrl)}`;
    const response = await axios.get(apiUrl);
    
    if (response.data && response.data.data) {
      const videoUrl = response.data.data.play; 
      const videoTitle = response.data.data.title || 'tiktok_video';
      
      event.reply('download-status', 'Mengunduh berkas video...');
      
      // Memunculkan kotak dialog simpan berkas di Linux
      const { filePath } = await dialog.showSaveDialog(mainWindow, {
        title: 'Simpan Video DownTik',
        defaultPath: path.join(app.getPath('downloads'), `${videoTitle.substring(0, 20)}.mp4`),
        filters: [{ name: 'Video Files', extensions: ['mp4'] }]
      });

      if (!filePath) {
        event.reply('download-status', 'Unduhan dibatalkan.');
        return;
      }

      // Menulis aliran data video (stream) ke penyimpanan lokal Linux
      const writer = fs.createWriteStream(filePath);
      const videoStream = await axios({
        url: videoUrl,
        method: 'GET',
        responseType: 'stream'
      });

      videoStream.data.pipe(writer);

      writer.on('finish', () => {
        event.reply('download-status', '✅ Video sukses diunduh!');
        dialog.showMessageBox(mainWindow, {
          type: 'info',
          title: 'Sukses',
          message: 'Video TikTok berhasil disimpan!'
        });
      });

      writer.on('error', (err) => {
        event.reply('download-status', `Gagal menulis berkas: ${err.message}`);
      });

    } else {
      event.reply('download-status', '❌ Tautan tidak valid atau video tidak ditemukan.');
    }
  } catch (error) {
    event.reply('download-status', `❌ Terjadi kesalahan server: ${error.message}`);
  }
});

// --- LOGIKA IPC AUTO-UPDATE KONDISIONAL ---
autoUpdater.on('checking-for-update', () => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('update-message', 'Memeriksa pembaruan di GitHub...');
  }
});

autoUpdater.on('update-available', (info) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('update-message', `Versi baru ditemukan: ${info.version}`);
  }
});

autoUpdater.on('update-not-available', () => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('update-message', 'Aplikasi sudah menggunakan versi terbaru.');
  }
});

autoUpdater.on('download-progress', (progressObj) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('update-progress', progressObj.percent);
  }
});

autoUpdater.on('update-downloaded', (info) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('update-ready', info.version);
  }
});

autoUpdater.on('error', (err) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('update-message', `Gagal mengecek pembaruan: ${err.message}`);
  }
});

// Aksi ketika tombol "Mulai Ulang Aplikasi" di HTML diklik
ipcMain.on('restart-app', () => {
  autoUpdater.quitAndInstall();
});
